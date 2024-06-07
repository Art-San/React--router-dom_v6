import { Outlet } from 'react-router-dom'
import '../styles/Layout.css'
import Loader from './Loader'
import { Suspense } from 'react'

export default function LayoutAuth() {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

// import { Outlet } from 'react-router-dom'
// import '../styles/Layout.css'

// export default function AuthLayout() {
//   return (
//     <div className="auth-layout">
//       <Outlet />
//     </div>
//   )
// }
