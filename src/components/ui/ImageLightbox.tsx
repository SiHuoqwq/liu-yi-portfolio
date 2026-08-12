import { useEffect, useRef, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { ResponsiveImage } from './ResponsiveImage'

const lightboxStack: symbol[] = []
const lightboxCloseButtons = new Map<symbol, HTMLButtonElement>()
const lightboxElements = new Map<symbol, HTMLDivElement>()
const backgroundInertState = new Map<Element, boolean>()

function syncLightboxStack() {
  const topInstance = lightboxStack.at(-1)
  for (const [instance, element] of lightboxElements) {
    const isTop = instance === topInstance
    element.toggleAttribute('inert', !isTop)
    if (isTop) element.removeAttribute('aria-hidden')
    else element.setAttribute('aria-hidden', 'true')
  }
}

function lockBackground() {
  if (lightboxStack.length !== 1) return
  for (const element of Array.from(document.body.children).filter((child) => !child.classList.contains('image-lightbox'))) {
    backgroundInertState.set(element, element.hasAttribute('inert'))
    element.setAttribute('inert', '')
  }
  document.body.dataset.imageViewerOpen = 'true'
}

function unlockBackground() {
  if (lightboxStack.length > 0) return
  for (const [element, wasInert] of backgroundInertState) {
    if (!wasInert) element.removeAttribute('inert')
  }
  backgroundInertState.clear()
  delete document.body.dataset.imageViewerOpen
}

type ImageLightboxProps = {
  src: string
  alt: string
  width: number
  height: number
  onClose: () => void
}

export function ImageLightbox({ src, alt, width, height, onClose }: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef(Symbol('image-lightbox'))

  useEffect(() => {
    const instance = instanceRef.current
    lightboxStack.push(instance)
    if (closeRef.current) lightboxCloseButtons.set(instance, closeRef.current)
    if (dialogRef.current) lightboxElements.set(instance, dialogRef.current)
    syncLightboxStack()
    lockBackground()
    closeRef.current?.focus()

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (lightboxStack.at(-1) !== instance) return
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      const index = lightboxStack.lastIndexOf(instance)
      if (index >= 0) lightboxStack.splice(index, 1)
      lightboxCloseButtons.delete(instance)
      lightboxElements.delete(instance)
      syncLightboxStack()
      unlockBackground()
      const nextInstance = lightboxStack.at(-1)
      if (nextInstance) window.requestAnimationFrame(() => lightboxCloseButtons.get(nextInstance)?.focus())
    }
  }, [onClose])

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal(
    <div
      ref={dialogRef}
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`图片预览：${alt}`}
      onMouseDown={closeFromBackdrop}
    >
      <button ref={closeRef} className="image-lightbox__close" type="button" onClick={onClose} aria-label="关闭图片预览">
        <X aria-hidden="true" size={20} />
        <span>关闭</span>
      </button>
      <div className="image-lightbox__frame">
        <ResponsiveImage src={src} srcSet={`${src} ${width}w`} alt={alt} width={width} height={height} loading="eager" />
      </div>
    </div>,
    document.body,
  )
}
