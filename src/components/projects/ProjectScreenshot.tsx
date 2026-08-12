import { getAssetAvailability, getAssetDimensions } from '../../app/assets'
import { AssetPlaceholder } from '../ui/AssetPlaceholder'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function ProjectScreenshot({ path, alt, priority = false }: { path: string; alt: string; priority?: boolean }) {
  if (!getAssetAvailability(path)) return <AssetPlaceholder path={path} />
  const { width, height } = getAssetDimensions(path)
  return <ResponsiveImage src={path} srcSet={`${path} ${width}w`} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
}
