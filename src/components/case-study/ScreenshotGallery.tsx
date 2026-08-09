import { useRef, useState, type KeyboardEvent } from 'react'
import { ProjectScreenshot } from '../projects/ProjectScreenshot'

export type ScreenshotItem = {
  path: string
  alt: string
  width: number
  height: number
}

export function ScreenshotGallery({ items }: { items: readonly ScreenshotItem[] }) {
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const move = (index: number) => {
    const next = (index + items.length) % items.length
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); move(index + 1) }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); move(index - 1) }
    if (event.key === 'Home') { event.preventDefault(); move(0) }
    if (event.key === 'End') { event.preventDefault(); move(items.length - 1) }
  }

  return (
    <div className="screenshot-gallery">
      <div className="screenshot-gallery__tabs" role="tablist" aria-label="项目界面截图">
        {items.map((item, index) => <button key={item.path} ref={(node) => { tabRefs.current[index] = node }} role="tab" aria-selected={selected === index} aria-controls={`shot-panel-${index}`} id={`shot-tab-${index}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => onKeyDown(event, index)}>{String(index + 1).padStart(2, '0')}</button>)}
      </div>
      <div className="screenshot-gallery__panels">
        {items.map((item, index) => <div key={item.path} id={`shot-panel-${index}`} role="tabpanel" aria-labelledby={`shot-tab-${index}`} data-selected={selected === index}><ProjectScreenshot path={item.path} alt={item.alt} /></div>)}
      </div>
    </div>
  )
}
