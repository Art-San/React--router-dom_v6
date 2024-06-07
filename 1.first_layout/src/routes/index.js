// import React from 'react'
// import PathConstants from './pathConstants'
// import PrivateRoute from '../components/ProtectedRoute'

// const Home = React.lazy(() => import('../pages/Home'))
// const Team = React.lazy(() => import('../pages/Team'))
// const Portfolio = React.lazy(() => import('../pages/Portfolio'))
// const About = React.lazy(() => import('../pages/About'))
// const Private = React.lazy(() => import('../pages/Private'))

// const routes = [
//   { path: PathConstants.HOME, element: <Home /> },
//   { path: PathConstants.TEAM, element: <Team /> },
//   { path: PathConstants.PORTFOLIO, element: <Portfolio /> },
//   { path: PathConstants.ABOUT, element: <About /> },
//   {
//     path: PathConstants.PRIVATE,
//     element: (
//       <PrivateRoute>
//         <Private />
//       </PrivateRoute>
//     )
//   }
// ]

// export default routes

import React from 'react'
import { Navigate } from 'react-router-dom'
import PathConstants from './pathConstants'
import PrivateRoute from '../components/ProtectedRoute'
// import LayoutMain from '../components/LayoutMain'
import LayoutAuth from '../components/LayoutAuth'
import LayoutOrders from '../components/LayoutOrders'

const Home = React.lazy(() => import('../pages/Home'))
// const Team = React.lazy(() => import('../pages/Team'))
// const Portfolio = React.lazy(() => import('../pages/Portfolio'))
// const About = React.lazy(() => import('../pages/About'))
// const Private = React.lazy(() => import('../pages/Private'))
const Login = React.lazy(() => import('../pages/Login'))
const Register = React.lazy(() => import('../pages/Register'))
const OrdersList = React.lazy(() => import('../pages/Orders/OrdersList'))
const Order = React.lazy(() => import('../pages/Orders/Order'))

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'auth',
    element: <LayoutAuth />,
    children: [
      { path: PathConstants.QUOTES, element: <Navigate to="/auth/register" /> },
      { path: PathConstants.LOGIN, element: <Login /> },
      { path: PathConstants.REGISTER, element: <Register /> },
      { path: PathConstants.STAR, element: <Navigate to="/auth/register" /> }
    ]
  },
  {
    path: 'orders',
    element: (
      <PrivateRoute redirectTo={'/auth/login'} element={<LayoutOrders />} />
    ),
    children: [
      { path: PathConstants.QUOTES, element: <OrdersList /> },
      { path: PathConstants.POSTID, element: <Order /> }
    ]
  },
  { path: PathConstants.STAR, element: <Navigate to="/orders" /> }
]

export default routes

// import MainLayout from "./components/MainLayout"
// import AuthLayout from "./components/AuthLayout"
// import HomePage from "./pages/HomePage"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import ProtectedPage from "./pages/ProtectedPage"
// import Page404 from "./pages/Page404"
// import PrivateRoute from "./PrivateRoute"

// const routes = [
//     {
//         path: "/",
//         element: <MainLayout />,
//         errorElement: <Page404 />,
//         children: [
//             {
//                 path: "",
//                 element: <HomePage />,
//             },
//             {
//                 path: "protected",
//                 element: (
//                     <PrivateRoute>
//                         <ProtectedPage />
//                     </PrivateRoute>
//                 ),
//             },
//             // Другие защищенные маршруты
//         ],
//     },
//     {
//         path: "/auth",
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: "login",
//                 element: <Login />,
//             },
//             {
//                 path: "register",
//                 element: <Register />,
//             },
//         ],
//     },
//     // Другие маршруты
// ]

// export default routes
