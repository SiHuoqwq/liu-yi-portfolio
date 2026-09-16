export type AssetRecord = {
  path: string
  available: boolean
  requiredForRelease: boolean
  width?: number
  height?: number
}

export const assetManifest = {
  resume: { path: '/resume/liu-yi-ai-application-resume.pdf', available: false, requiredForRelease: true },
  profile: { path: '/images/profile/liu-yi.webp', available: false, requiredForRelease: false },
  xishuHero: { path: '/images/xishu/hero-workbench.webp', available: true, requiredForRelease: true, width: 1600, height: 760 },
  xishuDataset: { path: '/images/xishu/dataset-profile.webp', available: true, requiredForRelease: true, width: 1600, height: 980 },
  xishuAnalysis: { path: '/images/xishu/analysis-result.webp', available: true, requiredForRelease: true, width: 1600, height: 560 },
  xishuArtifact: { path: '/images/xishu/artifact-overview.webp', available: true, requiredForRelease: true, width: 1600, height: 1590 },
  xishuRun: { path: '/images/xishu/run-details.webp', available: true, requiredForRelease: true, width: 1600, height: 1000 },
  xishuHistory: { path: '/images/xishu/session-history.webp', available: true, requiredForRelease: false, width: 1200, height: 464 },
  xishuRecovery: { path: '/images/xishu/session-recovery.webp', available: true, requiredForRelease: true, width: 940, height: 1150 },
  xishuBoundary: { path: '/images/xishu/boundary-refusal.webp', available: true, requiredForRelease: true, width: 1600, height: 900 },
  knowledgeflowHero: { path: '/images/knowledgeflow/hero-workbench.webp', available: true, requiredForRelease: true, width: 1600, height: 760 },
  knowledgeflowEmpty: { path: '/images/knowledgeflow/upload-empty.webp', available: true, requiredForRelease: true, width: 1600, height: 1000 },
  knowledgeflowDocuments: { path: '/images/knowledgeflow/document-list.webp', available: true, requiredForRelease: true, width: 1600, height: 1000 },
  knowledgeflowStreaming: { path: '/images/knowledgeflow/streaming-chat.webp', available: true, requiredForRelease: true, width: 1600, height: 1000 },
  knowledgeflowSource: { path: '/images/knowledgeflow/source-snapshot.webp', available: true, requiredForRelease: true, width: 1600, height: 1000 },
  knowledgeflowRestore: { path: '/images/knowledgeflow/session-restore.webp', available: true, requiredForRelease: true, width: 1600, height: 1000 },
  productstudioWorkbench: { path: '/images/productstudio/01_workbench_overview.png', available: true, requiredForRelease: true, width: 1440, height: 900 },
  productstudioCreativeFlow: { path: '/images/productstudio/02_creative_flow.png', available: true, requiredForRelease: true, width: 1224, height: 524 },
  productstudioGenerationQa: { path: '/images/productstudio/03_generation_result_qa.png', available: true, requiredForRelease: true, width: 1224, height: 923 },
  productstudioIsolation: { path: '/images/productstudio/04_product_context_isolation.png', available: true, requiredForRelease: true, width: 1440, height: 900 },
  productstudioNeutralWorkspace: { path: '/images/productstudio/05_neutral_workspace.png', available: true, requiredForRelease: true, width: 1440, height: 900 },
  favicon: { path: '/favicon.svg', available: true, requiredForRelease: true },
  shareImage: { path: '/images/share/portfolio.webp', available: false, requiredForRelease: true },
} as const satisfies Record<string, AssetRecord>

export function getAssetAvailability(path: string) {
  return Object.values(assetManifest).some((asset) => asset.path === path && asset.available)
}

export function getAssetDimensions(path: string) {
  const asset = Object.values(assetManifest).find((record) => record.path === path)
  return {
    width: asset && 'width' in asset ? asset.width : 1440,
    height: asset && 'height' in asset ? asset.height : 900,
  }
}

export const missingReleaseAssets = Object.values(assetManifest).filter((asset) => asset.requiredForRelease && !asset.available)
