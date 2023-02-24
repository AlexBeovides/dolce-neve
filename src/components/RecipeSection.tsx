import '../styles/RecipeSection.scss'

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
    <div className="recipe-section">


      <div ref={ref} className="tripod"></div>
    </div>
  );
}