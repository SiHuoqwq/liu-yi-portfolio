import { screen, within } from '@testing-library/react'
import { renderApp } from '../test/render'

it('keeps KnowledgeFlow supported, verified and planned capabilities semantically separate', async () => {
  renderApp(['/projects/knowledgeflow'])
  expect(await screen.findByRole('heading', { level: 1, name: /KnowledgeFlow AI/ })).toBeVisible()
  expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute('href', '/')
  expect(screen.getAllByTestId('case-section')).toHaveLength(13)

  const supported = screen.getByRole('region', { name: 'KnowledgeFlow 已实现能力' })
  expect(within(supported).getByText(/PDF · TXT · Markdown/)).toBeVisible()
  expect(within(supported).getByText(/BAAI\/bge-small-zh-v1.5/)).toBeVisible()
  for (const stage of ['FILE', 'LOAD', 'CLEAN', 'QUALITY CHECK', 'CHUNK', 'STABLE ID', 'BGE EMBEDDING', 'CHROMA']) {
    expect(screen.getByText(stage)).toBeVisible()
  }
  for (const idPart of ['SOURCE', 'PAGE', 'CHUNK INDEX', 'START INDEX', 'CONTENT HASH', 'STABLE CHUNK ID']) {
    expect(screen.getByText(idPart)).toBeVisible()
  }
  expect(screen.getByText('Character-based context budget')).toBeVisible()
  expect(screen.getByText('Remove invalid citations')).toBeVisible()
  for (const unfinished of ['OCR', 'BM25', 'Reranker']) {
    expect(within(supported).queryByText(new RegExp(unfinished))).not.toBeInTheDocument()
  }

  const limitations = screen.getByRole('region', { name: 'KnowledgeFlow 当前限制' })
  expect(within(limitations).getAllByText(/OCR/).length).toBeGreaterThan(0)
  expect(within(limitations).getByText(/BM25/)).toBeVisible()
  expect(within(limitations).getAllByText(/Reranker/).length).toBeGreaterThan(0)

  const verified = screen.getByRole('region', { name: 'KnowledgeFlow 验证状态' })
  expect(within(verified).getByText('FAKE PROVIDER FULL-STACK / PASSED')).toBeVisible()
  expect(within(verified).getByText('REAL DEEPSEEK REACT E2E / VERIFIED')).toBeVisible()
  expect(within(verified).getByText('2-TURN QA · SOURCE TRACE · SESSION RESTORE')).toBeVisible()
  expect(within(verified).queryByText('REAL DEEPSEEK FULL-STACK / VERIFIED')).not.toBeInTheDocument()
})
