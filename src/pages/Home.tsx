import { BodySection } from "../components/BodySection";
import { ParallaxText } from "../components/ParallaxText";
import { ParallaxImg } from "../components/ParallaxImg";
import { MenuSection } from "../components/MenuSection";
import { RecipeSection } from "../components/RecipeSection";

import { useState, useRef } from "react";

export const Home= () => {
  const [ inView1 , setInView1 ] = useState(false);
  const [ inView2 , setInView2 ] = useState(false);
  

  return (
    <>
      <div className='main-header'>
        <div className="landing-img"></div>
      </div>
      
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
      
    </>
  );
}