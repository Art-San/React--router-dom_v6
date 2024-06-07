import flattenDeep from 'lodash/flattenDeep'
import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

// ===== Функция примет этот массив.
// [2, 4, [5, 41, [100, 200], 500], 10, [50, 30], 30];
// =====  И выведите все значения на один уровень.
// [2, 4, 5, 41, 100, 200, 500, 10, 50, 30, 30]
// ======= Вложенных массивов вообще не будет.

interface RouteElement {
  name: string
  title?: string
  component?: React.ComponentType
  path: string
  isPublic?: boolean | undefined
  hasSiderLink?: boolean
  routes?: RouteElement[]
}

interface MainRoute {
  layout: React.ElementType
  routes: RouteElement[]
}

interface RoutesProps {
  isAuthorized: boolean
}

const generateFlattenRoutes = (routes: RouteElement[]): RouteElement[] => {
  if (!routes) return []
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes || [])
    ])
  ) as RouteElement[]
}

export const renderRoutes = (mainRoutes: MainRoute[]) => {
  const Routes: React.FC<RoutesProps> = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes)
      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(({ component: Component, path, name, isPublic }) => {
            return (
              <Route
                key={name}
                element={
                  <ProtectedRoute
                    isAuthorized={isAuthorized}
                    isPublic={isPublic}
                  />
                }
              >
                {Component && path && (
                  <Route element={<Component />} path={path} />
                )}
              </Route>
            )
          })}
        </Route>
      )
    })
    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}
