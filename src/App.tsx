import "./styles/_main.scss";
import { useState, useRef } from "react";
import { HeaderSection } from "./components/HeaderSection";
import { BodySection } from "./components/BodySection";
import { ParallaxText } from "./components/ParallaxText";
import { ParallaxImg } from "./components/ParallaxImg";
import { MenuSection } from "./components/MenuSection";
import { RecipeSection } from "./components/RecipeSection";
import { FooterSection } from "./components/FooterSection";


function App() {
  return (
    <div>
        <HeaderSection/>
        <BodySection/>
        <ParallaxText
          innerText={"gelati popolari"}
        />
        <ParallaxImg/>
        <MenuSection/>
        <ParallaxText
          innerText={"deliziose ricette"}
        />
        <RecipeSection/>
        
        <FooterSection/>

    </div>
    
  )
}

export default App
