import '../styles/BodySection.scss';
import { useInView } from 'react-intersection-observer'
import { InView } from 'react-intersection-observer/InView';
import bgBodySect from "../assets/images/body-section1.png";

export function BodySection() {
  const { ref , inView } = useInView();
  
  return (
    <div className={`body-section`}>
      <div className="section-text">
        <span ref={ref} className={`body-header section-header ${inView ? 'show-header' : 'hidden-header'}`}>
          ¿Quienes sómos?
        </span>
        <span className={`body-text hidden ${inView ? ' show-body-text' : ' hidden-body-text'}`}>
        Dolce Neve es una heladería que se ha ganado una excelente reputación por sus políticas hacia los clientes y el buen servicio que brinda en todo momento. Una de sus políticas más destacadas es el compromiso con la calidad de sus productos. Todos los helados son elaborados con ingredientes frescos y de alta calidad, lo que se refleja en su delicioso sabor y textura. Además, la heladería se esfuerza por ofrecer opciones para todos los gustos y necesidades, incluyendo opciones sin lactosa y veganas.
        </span>
        
      </div>
      
        <div className="section-img" style={{ backgroundImage: `url(${bgBodySect})`}}>


      </div>
    </div>
  )
}