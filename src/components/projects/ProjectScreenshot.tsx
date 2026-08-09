import { getAssetAvailability } from '../../app/assets'
import { AssetPlaceholder } from '../ui/AssetPlaceholder'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function ProjectScreenshot({ path, alt, priority = false }: { path: string; alt: string; priority?: boolean }) {
  if (!getAssetAvailability(path)) return <AssetPlaceholder path={path} />
  return <ResponsiveImage src={path} srcSet={`${path} 1440w`} alt={alt} width={1440} height={900} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
}
