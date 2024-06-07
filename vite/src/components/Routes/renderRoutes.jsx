import { Route, Routes as ReactRoutes } from 'react-router-dom'
import generateFlattenRoutes from '../../utils/generateFlattenRoutes'
import ProtectedRoute from './ProtectedRoute'

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes)

      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(
            ({ component: Component, path, name, isPublic }) =>
              Component &&
              path && (
                <Route
                  key={name}
                  element={
                    <ProtectedRoute
                      isPublic={!!isPublic}
                      isAuthorized={isAuthorized}
                      redirectTo="/home"
                    >
                      <Component />
                    </ProtectedRoute>
                  }
                  path={path}
                />
              )
          )}
        </Route>
      )
    })
    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}
