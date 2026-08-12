import { assetManifest, getAssetAvailability } from './assets'

it('publishes the selected Xishu evidence assets with their intrinsic dimensions', () => {
  const expected = [
    ['xishuHero', '/images/xishu/hero-workbench.webp', 1600, 760],
    ['xishuDataset', '/images/xishu/dataset-profile.webp', 1600, 980],
    ['xishuAnalysis', '/images/xishu/analysis-result.webp', 1600, 560],
    ['xishuArtifact', '/images/xishu/artifact-overview.webp', 1600, 1300],
    ['xishuRun', '/images/xishu/run-details.webp', 1600, 1000],
    ['xishuBoundary', '/images/xishu/boundary-refusal.webp', 1600, 900],
  ] as const

  for (const [key, path, width, height] of expected) {
    expect(assetManifest[key]).toMatchObject({ path, width, height, available: true })
    expect(getAssetAvailability(path)).toBe(true)
  }
})
