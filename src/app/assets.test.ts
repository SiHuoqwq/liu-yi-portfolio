import { assetManifest, getAssetAvailability, missingReleaseAssets } from './assets'

it('publishes the approved personal assets with their stable public paths', () => {
  expect(assetManifest.resume).toMatchObject({
    path: '/resume/liu-yi-ai-application-resume.pdf',
    available: true,
  })
  expect(assetManifest.profile).toMatchObject({
    path: '/images/profile/liu-yi.webp',
    available: true,
    width: 591,
    height: 827,
  })
  expect(assetManifest.shareImage).toMatchObject({
    path: '/images/share/portfolio.webp',
    available: true,
    width: 1200,
    height: 630,
  })
  expect(missingReleaseAssets).toEqual([])
})

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
