import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'

export const routeDefinitions: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { HomePage } = await import('../pages/HomePage')
          return { Component: HomePage }
        },
      },
      {
        path: '/projects/xishu',
        lazy: async () => {
          const { XishuPage } = await import('../pages/XishuPage')
          return { Component: XishuPage }
        },
      },
      {
        path: '/projects/knowledgeflow',
        lazy: async () => {
          const { KnowledgeFlowPage } = await import('../pages/KnowledgeFlowPage')
          return { Component: KnowledgeFlowPage }
        },
      },
      {
        path: '*',
        lazy: async () => {
          const { NotFoundPage } = await import('../pages/NotFoundPage')
          return { Component: NotFoundPage }
        },
      },
    ],
  },
]

export const router = createBrowserRouter(routeDefinitions)
