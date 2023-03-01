import '../styles/LowerBodySection.scss'
import { MenuCard } from './MenuCard';

import { useState , useEffect } from 'react';

import { useInView } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer/InView';
 
 

export const MenuSection= ({setInView}:{setInView:any}) => { 

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
    <div className='menu-section lower-body-section'>
      <div className='intro-text'>
        <p> Nos enorgullece presentarles nuestra sección de platos favoritos, seleccionados basados en las encuestas realizadas a nuestros clientes. Aquí encontrará una selección de los sabores y combinaciones más populares que nuestros clientes han disfrutado a lo largo del tiempo. Todos nuestros helados son elaborados diariamente con ingredientes frescos y de alta calidad, lo que garantiza una experiencia de sabor excepcional en cada bocado. ¡Ven y prueba nuestros platos favoritos y descubre por qué nuestros clientes los aman tanto! </p>
      </div>

      <div className='container'>
        <MenuCard name="Budino di riso" price="5" stars={5} url="/src/assets/images/menu-card1.png"/>
        <MenuCard name="Stracciatella"  price="7" stars={3} url="/src/assets/images/menu-card2.png"/>
        <MenuCard name="Cantuccini & Vin Santo" price="3" stars={4} url="/src/assets/images/menu-card3.jpg"/>
      </div>
 
      <div ref={ref} className="tripod1">
        
      </div>
    </div>
  );
}