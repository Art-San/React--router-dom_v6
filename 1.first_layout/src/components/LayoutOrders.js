import { Outlet } from 'react-router-dom'
import '../styles/Layout.css'
import Loader from './Loader'
import { Suspense } from 'react'
import Header from './Header'

export default function LayoutOrders() {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Header />
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
