import '../styles/MenuSection.scss'

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
    <div className='menu-section'>


      <div className='grid-container'>
        <div className="menu-element">
          <div className="card-img" id="card1">   

          </div>

          <div className="card-footer">
            <span className="item-name">
              Cioccolato
            </span>
            <span className="item-price">
              $3.55
            </span>
          </div>

        </div>
        <div className="menu-element">
          <div className="card-img" id="card2">

          </div>

          <div className="card-footer">
            <span className="item-name">
              Stracciatella
            </span>
            <span className="item-price">
              $6.99

            </span>
          </div>

        </div>
        <div className="menu-element">
          <div className="card-img" id="card3">

          </div>

          <div className="card-footer">
            <span className="item-name">
              Fragola
            </span>
            <span className="item-price">
              $4.99

            </span>
          </div>

        </div>


      </div>


      <div ref={ref} className="tripod">
        
      </div>
    </div>
  );
}