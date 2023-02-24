import '../styles/NavBar.scss';
import { useState } from 'react';

export function NavBar({setLock}:{setLock:any}) {

  const [clicked,setClicked] =useState(false);

  return (
    <div className={`main-navbar ${clicked ? 'clicked' : 'non-clicked'}` }>
      <div className="wrapper">
        <div className="logo-container">
          dolce neve
        </div>

        <div className="nav-links">
        
          <a href="#" target="blank">menu</a>
          <a href="#" target="blank">recetas</a>
          <a href="#" target="blank">nosotros</a>
        
      </div>

        <div className='hamburger' onClick={()=>{setClicked(!clicked);setLock(!clicked)}}>
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
      </div>

      
      

    </div>
  )
}