import { assetManifest, getAssetAvailability } from './assets'

it('publishes the selected Xishu evidence assets with their intrinsic dimensions', () => {
  const expected = [
    ['xishuHero', '/images/xishu/hero-workbench.webp', 1600, 760],
    ['xishuDataset', '/images/xishu/dataset-profile.webp', 1600, 980],
    ['xishuAnalysis', '/images/xishu/analysis-result.webp', 1600, 560],
    ['xishuArtifact', '/images/xishu/artifact-overview.webp', 1600, 1590],
    ['xishuRun', '/images/xishu/run-details.webp', 1600, 1000],
    ['xishuBoundary', '/images/xishu/boundary-refusal.webp', 1600, 900],
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
