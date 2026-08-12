import { screen } from '@testing-library/react'
import { renderApp } from '../test/render'

describe('application route shell', () => {
  it('renders the home route with one main landmark and one heading', async () => {
    renderApp(['/'])

    expect(await screen.findByRole('main')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })
})
