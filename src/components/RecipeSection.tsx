import '../styles/LowerBodySection.scss'
import { RecipeCard } from './RecipeCard';

import { useState , useEffect } from 'react';

import { useInView } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer/InView';
 
 

export const RecipeSection= ({setInView}:{setInView:any}) => { 
  const { ref , inView }  = useInView();

  useEffect (()=> {
    console.log("asd")
    if(inView==true){
      setInView(true);
    }
    else {
      setInView(false);
    }
  },[inView]);

  return (
    <div className="recipe-section lower-body-section">
      <div className='intro-text'>
        <p>Nuestros helados y postres son elaborados con ingredientes de la más alta calidad, cuidadosamente seleccionados para garantizar el mejor sabor y textura. Además, nuestras recetas son el resultado de años de experiencia y experimentación por parte de nuestros talentosos chefs italianos. Entre nuestras recetas más populares se encuentra nuestro helado de pistacho con trozos de almendra, elaborado con pistachos recién tostados y molidos en nuestra cocina. También ofrecemos un helado de limón con vodka, perfecto para los días de verano, y nuestro helado de fresas y crema, hecho con fresas frescas de temporada y una rica crema italiana.</p>
      </div>

      <div className='container'>
        <RecipeCard name="Pistaccio" chef="Elogio Prestigiacomo" url="/src/assets/images/recipe-card1.jpg"/>
        <RecipeCard name="Amaretto" chef="Cristoforo De Nucci" url="/src/assets/images/recipe-card2.jpg"/>
        <RecipeCard name="Schiacciata Fiorentina" chef="Cesario Sabatini"  url="/src/assets/images/recipe-card3.jpg"/>
      </div>

      <div ref={ref} className="tripod2"></div> 
    </div>
  );
}
 
