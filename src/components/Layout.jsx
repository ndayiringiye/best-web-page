import { Outlet } from "react-router"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout