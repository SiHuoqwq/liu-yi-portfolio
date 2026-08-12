import { useRef, useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { getAssetAvailability, getAssetDimensions } from '../../app/assets'
import { AssetPlaceholder } from '../ui/AssetPlaceholder'
import { ImageLightbox } from '../ui/ImageLightbox'
import { ResponsiveImage } from '../ui/ResponsiveImage'

export function ProjectScreenshot({ path, alt, priority = false }: { path: string; alt: string; priority?: boolean }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  if (!getAssetAvailability(path)) return <AssetPlaceholder path={path} />
  const { width, height } = getAssetDimensions(path)

  const close = () => {
    setOpen(false)
    window.requestAnimationFrame(() => {
      if (!document.body.hasAttribute('data-image-viewer-open')) triggerRef.current?.focus()
    })
  }

  return (
    <>
      <button ref={triggerRef} className="project-image-trigger" type="button" aria-label={`放大查看：${alt}`} onClick={() => setOpen(true)}>
        <ResponsiveImage src={path} srcSet={`${path} ${width}w`} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
        <span className="project-image-trigger__hint" aria-hidden="true"><Maximize2 size={15} />点击放大</span>
      </button>
      {open ? <ImageLightbox src={path} alt={alt} width={width} height={height} onClose={close} /> : null}
    </>
  )
}
