import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { xishuProject } from '../../content/projects'
import { FeaturedProjectPanel } from './FeaturedProjectPanel'

it('exposes release evidence and a real case-study route', () => {
  render(<MemoryRouter><FeaturedProjectPanel project={xishuProject} /></MemoryRouter>)
  expect(screen.getAllByText(/v2.0.0/).length).toBeGreaterThan(0)
  expect(screen.getByText('183 / 183 Backend Tests')).toBeVisible()
  expect(screen.getByRole('link', { name: /查看析数 Case Study/ })).toHaveAttribute('href', '/projects/xishu')
})
