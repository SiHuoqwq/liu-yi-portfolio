import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { ReducedMotionProvider } from '../components/ui/ReducedMotionProvider'
import { routeDefinitions } from '../app/router'

export function renderApp(initialEntries: string[] = ['/']) {
  const router = createMemoryRouter(routeDefinitions, { initialEntries })
  return render(
    <ReducedMotionProvider>
      <RouterProvider router={router} />
    </ReducedMotionProvider>,
  )
}
