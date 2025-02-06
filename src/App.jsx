import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/Home"


const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route  path="/" element={<Home />}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App