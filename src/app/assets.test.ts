import { assetManifest, getAssetAvailability } from './assets'

it('records the exact approved asset paths without inventing availability', () => {
  expect(assetManifest.resume.path).toBe('/resume/liu-yi-ai-application-resume.pdf')
  expect(assetManifest.xishuHero.path).toBe('/images/xishu/hero-workbench.webp')
  expect(assetManifest.knowledgeflowHero.path).toBe('/images/knowledgeflow/hero-workbench.webp')
  expect(getAssetAvailability(assetManifest.resume.path)).toBe(false)
  expect(getAssetAvailability(assetManifest.favicon.path)).toBe(true)
  expect(
    Object.entries(assetManifest)
      .filter(([key]) => key !== 'favicon')
      .every(([, asset]) => asset.available === false),
  ).toBe(true)
})
