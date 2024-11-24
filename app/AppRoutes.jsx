import { Route, Routes } from "react-router-dom"
import Cards from "./src/Components/Cards"
import Home from "./src/Page/Home"
function AppRoutes() {
  
    return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cards" element={<Cards/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
