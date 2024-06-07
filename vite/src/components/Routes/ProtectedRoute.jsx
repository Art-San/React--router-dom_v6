import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isPublic, isAuthorized, redirectTo, children }) => {
  if (!isPublic && !isAuthorized) {
    return <Navigate to="/login" />
  }
  if (isPublic && isAuthorized) {
    return <Navigate to={redirectTo} />
  }
  return <>{children}</>
}

export default ProtectedRoute
