import '../styles/NavBar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export function NavBar({setLock}:{setLock:any}) {

  const [clicked,setClicked] =useState(false);
  if(clicked){
    document.body.classList.add('locked');
  }
  else{
    document.body.classList.remove('locked')
  }

  return (
    <div className={`main-navbar ${clicked ? 'clicked' : 'non-clicked'}` }>
      <div className="wrapper">
        <div className="logo-container">
          dolce neve
        </div>

        <div className="nav-links">
        
          <Link to="/menu" target="blank"> menu </Link>
          <Link to="/recipes" target="blank"> recetas </Link>
          <Link to="/about" target="blank"> nosotros </Link>
           
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