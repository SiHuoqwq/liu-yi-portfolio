import type { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ReducedMotionProvider } from '../components/ui/ReducedMotionProvider'
import { router } from './router'

export function App(): ReactElement {
  return (
    <ReducedMotionProvider>
      <RouterProvider router={router} />
    </ReducedMotionProvider>
  )
}
