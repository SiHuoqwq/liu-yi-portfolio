import { screen, within } from '@testing-library/react'
import { renderApp } from '../test/render'

it('keeps Xishu release evidence and unfinished claims in their semantic states', async () => {
  renderApp(['/projects/xishu'])
  expect(await screen.findByRole('heading', { level: 1, name: /析数/ })).toBeVisible()
  expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute('href', '/')
  expect(screen.getAllByTestId('case-section')).toHaveLength(12)
  expect(screen.getByText('183 / 183 PASS')).toBeVisible()
  expect(screen.getByText('59 / 59 PASS')).toBeVisible()
  expect(screen.getByText('合作式取消')).toBeVisible()
  expect(screen.getByText(/无分布式队列和多节点执行/)).toBeVisible()
  expect(screen.getAllByText('示意').length).toBeGreaterThan(0)
  expect(screen.getByText('仅识别受控分析意图，不自由扩展未知分析路径。')).toBeVisible()
  expect(screen.getByText('由 pandas 完成统计、聚合和趋势计算。')).toBeVisible()
  expect(screen.getByText('实时流负责体验，持久化记录负责可靠性。')).toBeVisible()

  const artifactTypes = screen.getByRole('group', { name: '析数 Artifact 类型' })
  for (const type of ['TEXT', 'METRIC', 'TABLE', 'CHART']) {
    expect(within(artifactTypes).getByText(type)).toBeVisible()
  }
  expect(within(artifactTypes).queryByText('EVIDENCE')).not.toBeInTheDocument()

  expect(screen.getByText(/DeepSeek 真实模型模式/)).toBeVisible()
  expect(screen.queryByText(/Fake Provider 确定性演示模式/)).not.toBeInTheDocument()
  for (const alt of [
    '析数合成演示数据的数据集画像',
    '析数课程类别分析结果',
    '析数结构化表格与图表 Artifact',
    '析数已完成运行的执行详情',
    '析数教师维度数据条件不足说明',
  ]) {
    expect(screen.getByRole('img', { name: alt })).toBeInTheDocument()
  }

  const implemented = screen.getByRole('region', { name: '析数已实现能力' })
  for (const unsupported of ['OpenAI Provider', 'Redis', 'P95', '云部署']) {
    expect(within(implemented).queryByText(new RegExp(unsupported))).not.toBeInTheDocument()
  }
  const limitations = screen.getByRole('region', { name: '析数当前限制' })
  expect(within(limitations).getByText(/Redis/)).toBeVisible()
  expect(within(limitations).getByText(/P95/)).toBeVisible()
})
