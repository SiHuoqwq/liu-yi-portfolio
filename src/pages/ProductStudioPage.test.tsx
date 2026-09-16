import { screen, within } from '@testing-library/react'
import { renderApp } from '../test/render'

it('presents the nine-part ProductStudio evidence narrative with scoped roadmap claims', async () => {
  renderApp(['/projects/productstudio'])

  expect(await screen.findByRole('heading', { level: 1, name: /ProductStudio/ })).toBeVisible()
  expect(screen.getByRole('heading', { level: 1, name: 'ProductStudio' })).toBeVisible()
  expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute('href', '/')
  expect(screen.getAllByTestId('case-section')).toHaveLength(9)
  expect(screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent)).toEqual([
    '背景与问题',
    '核心架构',
    'Creative Director 与显式采用',
    'Generation + QA',
    'Product Context Isolation',
    '技术实现',
    'Current Limitations',
    'Roadmap',
  ])

  const hero = screen.getByRole('region', { name: 'ProductStudio Hero' })
  expect(within(hero).getByText('01 / 09')).toBeVisible()
  expect(within(hero).getByText('AI 电商视觉内容生成工作台')).toBeVisible()
  expect(within(hero).getByText('将商品事实约束、受控创意规划、生成执行和质量验证串联起来的电商视觉工作流。')).toBeVisible()
  for (const keyword of ['React + TypeScript', 'FastAPI', 'Controlled AI Workflow', 'CUI / Qwen Image Edit']) {
    expect(within(hero).getByText(keyword)).toBeVisible()
  }
  expect(within(hero).getByRole('link', { name: '查看工作台' })).toHaveAttribute('href', '#productstudio-workbench')
  const workbench = within(hero).getByRole('group', { name: 'ProductStudio 工作台截图' })
  expect(workbench).toHaveAttribute('id', 'productstudio-workbench')
  expect(within(workbench).getByRole('img', { name: 'ProductStudio 工作台全貌' })).toHaveAttribute(
    'src',
    '/images/productstudio/05_neutral_workspace.png',
  )

  const expectedImages = [
    ['ProductStudio 工作台全貌', '/images/productstudio/05_neutral_workspace.png'],
    ['ProductStudio 创意候选、选择与采用流程', '/images/productstudio/02_creative_flow.png'],
    ['ProductStudio 真实生成结果与质量确认', '/images/productstudio/03_generation_result_qa.png'],
    ['ProductStudio 商品上下文隔离与恢复', '/images/productstudio/04_product_context_isolation.png'],
  ] as const

  expect(screen.getAllByRole('img')).toHaveLength(expectedImages.length)
  for (const [name, src] of expectedImages) {
    expect(screen.getByRole('img', { name })).toHaveAttribute('src', src)
  }

  const architecture = screen.getByRole('region', { name: 'ProductStudio 核心架构' })
  for (const stage of ['Product Truth', 'Controlled AI Workflow', 'Generation', 'Fidelity QA', 'History / Recovery']) {
    expect(within(architecture).getByText(stage)).toBeVisible()
  }

  const creative = screen.getByRole('region', { name: 'ProductStudio Creative Director' })
  expect(within(creative).getByText('PROPOSED ≠ SELECTED ≠ APPROVED ≠ GENERATED')).toBeVisible()
  expect(within(creative).getByText(/当前 Creative Director 使用 Deterministic Creative Director Provider/)).toBeVisible()

  const generation = screen.getByRole('region', { name: 'ProductStudio Generation 与 QA' })
  expect(within(generation).getByText('GENERATION COMPLETED ≠ PRODUCT FIDELITY CONFIRMED')).toBeVisible()
  for (const binding of ['Strategy', 'Job', 'Fidelity QA']) {
    expect(within(generation).getByText(binding)).toBeVisible()
  }
  expect(within(generation).getByText(/生成完成后需要人工确认商品一致性/)).toBeVisible()

  const isolation = screen.getByRole('region', { name: 'ProductStudio 商品上下文隔离' })
  for (const state of ['ARIOSE', 'gaming headset', 'ARIOSE restore']) {
    expect(within(isolation).getByText(state)).toBeVisible()
  }

  const implementation = screen.getByRole('region', { name: 'ProductStudio 已实现技术' })
  expect(within(implementation).getByText('Controlled AI Workflow')).toBeVisible()
  expect(within(implementation).getByText(/Deterministic Creative Director Provider/)).toBeVisible()
  expect(within(implementation).queryByText(
    /LLM\/VLM Creative Director|Controlled Agent Workflow|Multi-reference|Human \+ Product|Multi-view|FLUX Profile|Advanced model management/,
  )).not.toBeInTheDocument()

  const roadmap = screen.getByRole('region', { name: 'ProductStudio Roadmap' })
  expect(within(roadmap).getByText('PLANNED / NOT IMPLEMENTED')).toBeVisible()
  for (const item of ['LLM/VLM Creative Director', 'Multi-reference', 'Human + Product', 'Multi-view', 'FLUX Profile']) {
    expect(within(roadmap).getByText(item)).toBeVisible()
  }

  expect(screen.queryByText(/Autonomous Agent|LLM Agent Creative Director|Multi-agent|Human QA|Human Approved/)).not.toBeInTheDocument()
})
