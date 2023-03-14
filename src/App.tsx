import "./styles/_main.scss";
import { NavBar } from "./components/NavBar"; 
import { FooterSection } from "./components/FooterSection";
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Recipes } from "./pages/Recipes"
import { About } from "./pages/About"

import { Route , Routes } from 'react-router-dom'
import { useState } from "react";

function App() {
  const [ locked , setLock ] = useState(false);

  return (
    <>
      {/* <div className={`${locked ? 'locked' : 'null'} main-container`}> */}
      <div className={`main-container`}>
        <NavBar setLock={setLock}/> 

        <Routes>
          <Route path="/dolce-neve-prod/" element={<Home/>}></Route>
          <Route path="/dolce-neve-pro/menu" element={<Menu/>}></Route>
          <Route path="/dolce-neve-prod/recipes" element={<Recipes/>}></Route>
          <Route path="/dolce-neve-prod/about" element={<About/>}></Route>
        </Routes>

        <FooterSection/>
    </div>

    </>
    
    
  )
}

export default App
