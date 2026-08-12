import type { ImgHTMLAttributes } from 'react'

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> & {
  src: string
  alt: string
  width: number
  height: number
  srcSet: string
}

export function ResponsiveImage({ src, alt, width, height, srcSet, loading = 'lazy', ...props }: ResponsiveImageProps) {
  return <img src={src} alt={alt} width={width} height={height} srcSet={srcSet} loading={loading} decoding="async" {...props} />
}
