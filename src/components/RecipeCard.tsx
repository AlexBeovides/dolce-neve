import "../styles/Card.scss"
import "../styles/RecipeCard.scss"

interface CardProps {
  name: string; 
  chef: string;
  url: string;
}

export const RecipeCard= (props : CardProps) => { 
  const propName=props.name;
  const propChef=props.chef;
  const propUrl=props.url 

  return (
    <div className="card">
      <div className="card__image-container">
        <div className="card__image" style={{ backgroundImage: `url(${propUrl} )`}}></div>
        {/* <img src={`${propUrl}`} alt="Salad" width="500" height="333" /> */}
      </div>

      <div className="card__info">
        <div className="car__info--title">
          <h3>{propName}</h3>
          <div className="bottom-row chef-name">Chef. {propChef}</div>
        </div>

      </div>
    </div>
  );

}
