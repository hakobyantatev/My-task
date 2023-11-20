import Navbar from "./Navbar/Navbar";
import {Outlet} from "react-router-dom"
import "./Layout.scss"


export default function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  )
}
