import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ redirectTo = '/auth/login', element }) {
  const location = useLocation()

  const isAuthenticated = true // тут ОГРАНИЧЕНИЕ
  if (!isAuthenticated)
    return <Navigate to={redirectTo} state={{ referrer: location }} /> // — здесь state сохраняет текущий location под именем referrer. Это можно использовать, например, для отслеживания откуда пришел пользователь.
  return element
}
// // ===== первый вар по видео
// function ProtectedRoute({ children, redirectTo = '/auth/login' }) {
//     const location = useLocation()
//     const isLoggedIn = useSelector(isLoggedInSelector());
//     if (!isLoggedIn) return <Navigate to={ redirectTo } state={{referrer: location}}/>
//     return children

// }
export default PrivateRoute
