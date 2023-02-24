import '../styles/ParallaxImg.scss'

export const ParallaxImg=({inView} : {inView:boolean}) => {
  return (
    <div className='parallax-wrapper'>
    <div  className={`${inView ? 'parallax2' : 'parallax1'} parallax-img`}>
       
      </div>
    </div>
  );
} 