import { Navigate, Outlet } from 'react-router-dom'

interface IProtectedRouteProps {
  isPublic: boolean | undefined
  isAuthorized: boolean
}

const ProtectedRoute = ({ isPublic, isAuthorized }: IProtectedRouteProps) => {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
