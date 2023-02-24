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
  const [ inView1 , setInView1 ] = useState(false);
  const [ inView2 , setInView2 ] = useState(false);
  const [ locked , setLock ] = useState(false)

  return (
    <div className={`${locked ? 'locked' : 'null'} main-container`}>
        <HeaderSection setLock={setLock}/>
        <BodySection/>
        <ParallaxText
          innerText={"gelati popolari"}
        />
        <ParallaxImg
           inView={inView1||inView2}
        
         />
        <MenuSection 
          setInView={setInView1}
        />
        <ParallaxText
          innerText={"deliziose ricette"}
        />
        <RecipeSection
          setInView={setInView2}
        />
        
        <FooterSection/>

    </div>
    
  )
}

export default App
