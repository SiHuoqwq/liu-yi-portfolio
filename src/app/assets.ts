export type AssetRecord = {
  path: string
  available: boolean
  requiredForRelease: boolean
}

export const assetManifest = {
  resume: { path: '/resume/liu-yi-ai-application-resume.pdf', available: false, requiredForRelease: true },
  profile: { path: '/images/profile/liu-yi.webp', available: false, requiredForRelease: false },
  xishuHero: { path: '/images/xishu/hero-workbench.webp', available: false, requiredForRelease: true },
  xishuDataset: { path: '/images/xishu/dataset-profile.webp', available: false, requiredForRelease: true },
  xishuRun: { path: '/images/xishu/run-progress.webp', available: false, requiredForRelease: true },
  xishuArtifact: { path: '/images/xishu/artifact-overview.webp', available: false, requiredForRelease: true },
  xishuChart: { path: '/images/xishu/chart-result.webp', available: false, requiredForRelease: true },
  knowledgeflowHero: { path: '/images/knowledgeflow/hero-workbench.webp', available: false, requiredForRelease: true },
  knowledgeflowEmpty: { path: '/images/knowledgeflow/upload-empty.webp', available: false, requiredForRelease: true },
  knowledgeflowDocuments: { path: '/images/knowledgeflow/document-list.webp', available: false, requiredForRelease: true },
  knowledgeflowStreaming: { path: '/images/knowledgeflow/streaming-chat.webp', available: false, requiredForRelease: true },
  knowledgeflowSource: { path: '/images/knowledgeflow/source-snapshot.webp', available: false, requiredForRelease: true },
  knowledgeflowRestore: { path: '/images/knowledgeflow/session-restore.webp', available: false, requiredForRelease: true },
  favicon: { path: '/favicon.svg', available: false, requiredForRelease: true },
  shareImage: { path: '/images/share/portfolio.webp', available: false, requiredForRelease: true },
} as const satisfies Record<string, AssetRecord>

export function getAssetAvailability(path: string) {
  return Object.values(assetManifest).some((asset) => asset.path === path && asset.available)
}

export const missingReleaseAssets = Object.values(assetManifest).filter((asset) => asset.requiredForRelease && !asset.available)
