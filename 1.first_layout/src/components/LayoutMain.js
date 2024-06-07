import { Outlet } from 'react-router-dom'
import '../styles/Layout.css'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'
import { Suspense } from 'react'

export default function LayoutMain() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

// import { Outlet } from "react-router-dom"
// import "../styles/Layout.css"
// import Header from "./Header"
// import Footer from "./Footer"
// import Loader from "./Loader"
// import { Suspense } from "react"

// export default function MainLayout() {
//     return (
//         <>
//             <Header />
//             <main>
//                 <Suspense fallback={<Loader />}>
//                     <Outlet />
//                 </Suspense>
//             </main>
//             <Footer />
//         </>
//     )
// }
