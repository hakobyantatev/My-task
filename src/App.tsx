import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home/Home"
import Error from "./Pages/Error/Error"



export default function App() {
  const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element = {<Home />}/>
        <Route path="*" element = {<Error />}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
