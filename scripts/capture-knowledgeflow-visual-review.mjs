import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const baseURL = process.env.PORTFOLIO_REVIEW_URL ?? "http://127.0.0.1:4173";
const outputDirectory = resolve("docs/visual-review-knowledgeflow-assets");
await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const records = [];
try {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 1024, height: 768 },
    { width: 390, height: 844 },
  ]) {
    for (const pageCase of [
      { slug: "home", route: "/" },
      { slug: "knowledgeflow", route: "/projects/knowledgeflow" },
    ]) {
      const page = await browser.newPage({ viewport });
      const runtimeErrors = [];
      page.on("pageerror", (error) => runtimeErrors.push(`pageerror:${error.name}`));
      page.on("console", (message) => {
        if (message.type() === "error") runtimeErrors.push("console:error");
      });
      await page.goto(`${baseURL}${pageCase.route}`, { waitUntil: "networkidle" });
      const knowledgeflowImages = page.locator('img[src*="/images/knowledgeflow/"]');
      const imageCount = await knowledgeflowImages.count();
      for (let index = 0; index < imageCount; index += 1) {
        const image = knowledgeflowImages.nth(index);
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((element) =>
          element.complete && element.naturalWidth > 0
            ? undefined
            : new Promise((resolve, reject) => {
                element.addEventListener("load", () => resolve(undefined), { once: true });
                element.addEventListener("error", () => reject(new Error(`Image failed: ${element.currentSrc}`)), { once: true });
              }),
        );
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      const record = await page.evaluate(() => {
        const images = [...document.images];
        const text = document.body.innerText;
        return {
          bodyWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth,
          brokenImages: images.filter((image) => !image.complete || image.naturalWidth === 0).length,
          knowledgeflowImages: images.filter((image) => image.currentSrc.includes("/images/knowledgeflow/")).map((image) => ({
            src: new URL(image.currentSrc).pathname,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
            renderedWidth: Math.round(image.getBoundingClientRect().width),
            renderedHeight: Math.round(image.getBoundingClientRect().height),
          })),
          placeholders: [...document.querySelectorAll("*")].filter((element) => element.textContent?.includes("待接入真实项目素材")).length,
          secretMatches: ["DEEPSEEK_API_KEY", "test-only-api-key", "D:\\Codex"].filter((value) => text.includes(value)),
          fakeBoundary: text.includes("FAKE PROVIDER FULL-STACK / PASSED"),
          realBoundary: text.includes("REAL DEEPSEEK REACT E2E / VERIFIED"),
          realScope: text.includes("2-TURN QA · SOURCE TRACE · SESSION RESTORE"),
          falseFullStackClaim: text.includes("REAL DEEPSEEK FULL-STACK / VERIFIED"),
        };
      });
      if (
        record.bodyWidth !== record.viewportWidth ||
        record.brokenImages !== 0 ||
        record.placeholders !== 0 ||
        record.secretMatches.length !== 0 ||
        !record.fakeBoundary ||
        !record.realBoundary ||
        !record.realScope ||
        record.falseFullStackClaim ||
        runtimeErrors.length !== 0
      ) {
        throw new Error(`Visual review failed for ${pageCase.route} at ${viewport.width}x${viewport.height}`);
      }
      records.push({
        label: `${viewport.width}x${viewport.height}`,
        route: pageCase.route,
        ...record,
        runtimeErrors,
      });
      await page.screenshot({
        path: `${outputDirectory}/${pageCase.slug}-${viewport.width}x${viewport.height}.png`,
        fullPage: true,
      });
      await page.close();
    }
  }
} finally {
  await browser.close();
}

await writeFile(`${outputDirectory}/review.json`, `${JSON.stringify(records, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ status: "passed", records: records.length }));
