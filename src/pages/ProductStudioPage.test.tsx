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
    'Current Boundaries',
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
  for (const label of [
    'INPUT / TRUTH',
    'PLANNING / CONTROL',
    'EXECUTION',
    'QUALITY GATE',
    'Product Truth',
    'Explicit Adoption',
    'Generation Job',
    'Fidelity QA',
    'Manual Confirmation',
    'GENERATION COMPLETED',
    'PRODUCT FIDELITY CONFIRMED',
    'HISTORY / RECOVERY',
    'STATE PERSISTENCE',
    'SAVE / RESTORE',
  ]) {
    for (const match of within(architecture).getAllByText(label)) {
      expect(match).toBeVisible()
    }
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
  expect(implementation.closest('.productstudio-tail')).toHaveClass('productstudio-tail__section--technical')
  expect(implementation.querySelectorAll('.technical-record > div')).toHaveLength(5)
  for (const label of ['CLIENT / API', 'CONTROLLED WORKFLOW', 'JOB EXECUTION', 'FIDELITY GATE', 'STATE RECOVERY']) {
    expect(within(implementation).getByText(label)).toBeVisible()
  }
  for (const fact of [
    'Deterministic Creative Director Provider',
    'Explicit Adoption',
    'Generation Job',
    'CUI / Qwen Image Edit',
    'Fidelity QA',
    'Manual Confirmation',
    'History / Recovery',
  ]) {
    expect(within(implementation).getByText(fact, { exact: false })).toBeVisible()
  }
  expect(within(implementation).queryByText(
    /LLM\/VLM Creative Director|Controlled Agent Workflow|Multi-reference|Human \+ Product|Multi-view|FLUX Profile|Advanced model management/,
  )).not.toBeInTheDocument()

  const boundaries = screen.getByRole('region', { name: 'ProductStudio 当前边界' })
  expect(boundaries.closest('.productstudio-tail')).toHaveClass('productstudio-tail__section--boundaries')
  expect(within(boundaries).getByText('CURRENT SCOPE')).toBeVisible()
  expect(boundaries.querySelectorAll('.technical-record > div')).toHaveLength(3)
  for (const boundary of ['PLANNING BOUNDARY', 'REFERENCE BOUNDARY', 'DELIVERY BOUNDARY']) {
    expect(within(boundaries).getByText(boundary)).toBeVisible()
  }
  expect(within(boundaries).getByText(/每个生成任务绑定一个隔离的当前商品上下文/)).toBeVisible()
  expect(within(boundaries).queryByText(/Single-product-only|系统只能保存一个商品|只能支持一个商品/i)).not.toBeInTheDocument()

  const roadmap = screen.getByRole('region', { name: 'ProductStudio Roadmap' })
  expect(roadmap.closest('.productstudio-tail')).toHaveClass('productstudio-tail__section--roadmap')
  expect(within(roadmap).getByText('PLANNED / NOT IMPLEMENTED')).toBeVisible()
  expect(roadmap.querySelectorAll('.technical-record > div')).toHaveLength(4)
  for (const direction of [
    'PLANNED 01 · CONTROLLED PLANNING',
    'PLANNED 02 · REFERENCE COMPOSITION',
    'PLANNED 03 · CONSISTENCY',
    'PLANNED 04 · MODEL PROFILE',
  ]) {
    expect(within(roadmap).getByText(direction)).toBeVisible()
  }
  for (const item of ['LLM/VLM Creative Director', 'Multi-reference', 'Human + Product', 'Multi-view', 'FLUX Profile']) {
    expect(within(roadmap).getByText(item, { exact: false })).toBeVisible()
  }
  expect(screen.queryByText('Advanced model management')).not.toBeInTheDocument()

  expect(screen.queryByText(/Autonomous Agent|LLM Agent Creative Director|Multi-agent|Human QA|Human Approved/)).not.toBeInTheDocument()
})
