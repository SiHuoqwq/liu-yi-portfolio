import { assetManifest, getAssetAvailability } from './assets'

it('publishes the approved resume at its stable public path', () => {
  expect(assetManifest.resume).toMatchObject({
    path: '/resume/liu-yi-ai-application-resume.pdf',
    available: true,
    requiredForRelease: true,
  })
  expect(getAssetAvailability('/resume/liu-yi-ai-application-resume.pdf')).toBe(true)
})

it('publishes the social share image with its intrinsic dimensions', () => {
  expect(assetManifest.shareImage).toMatchObject({
    path: '/images/share/portfolio.webp',
    available: true,
    requiredForRelease: true,
    width: 1200,
    height: 630,
  })
  expect(getAssetAvailability('/images/share/portfolio.webp')).toBe(true)
})

it('publishes the selected Xishu evidence assets with their intrinsic dimensions', () => {
  const expected = [
    ['xishuRealEstateOverview', '/images/xishu/01_real_estate_overview.png', 1440, 1100],
    ['xishuRealEstateAnalysis', '/images/xishu/02_real_estate_analysis.png', 1440, 1100],
  ] as const

  for (const [key, path, width, height] of expected) {
    expect(assetManifest[key]).toMatchObject({ path, width, height, available: true })
    expect(getAssetAvailability(path)).toBe(true)
  }
})

it('publishes the selected KnowledgeFlow evidence assets with their intrinsic dimensions', () => {
  const expected = [
    ['knowledgeflowHero', '/images/knowledgeflow/hero-workbench.webp', 1600, 760],
    ['knowledgeflowEmpty', '/images/knowledgeflow/upload-empty.webp', 1600, 1000],
    ['knowledgeflowDocuments', '/images/knowledgeflow/document-list.webp', 1600, 1000],
    ['knowledgeflowStreaming', '/images/knowledgeflow/streaming-chat.webp', 1600, 1000],
    ['knowledgeflowSource', '/images/knowledgeflow/source-snapshot.webp', 1600, 1000],
    ['knowledgeflowRestore', '/images/knowledgeflow/session-restore.webp', 1600, 1000],
  ] as const

  for (const [key, path, width, height] of expected) {
    expect(assetManifest[key]).toMatchObject({ path, width, height, available: true })
    expect(getAssetAvailability(path)).toBe(true)
  }
})

it('publishes the ProductStudio handoff assets with their intrinsic dimensions', () => {
  const expected = [
    ['productstudioWorkbench', '/images/productstudio/01_workbench_overview.png', 1440, 900],
    ['productstudioCreativeFlow', '/images/productstudio/02_creative_flow.png', 1224, 524],
    ['productstudioGenerationQa', '/images/productstudio/03_generation_result_qa.png', 1224, 923],
    ['productstudioIsolation', '/images/productstudio/04_product_context_isolation.png', 1440, 900],
    ['productstudioNeutralWorkspace', '/images/productstudio/05_neutral_workspace.png', 1440, 900],
  ] as const

  for (const [key, path, width, height] of expected) {
    expect(assetManifest[key]).toMatchObject({ path, width, height, available: true })
    expect(getAssetAvailability(path)).toBe(true)
  }
})
