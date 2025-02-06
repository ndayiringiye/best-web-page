import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/Home"
import Layout from "./components/Layout"


const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
        <Route  path="/" element={<Home />}/>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App