import "../styles/Card.scss"
import "../styles/MenuCard.scss"

interface CardProps {
  name: string;
  price: string;
  stars: number;
  url: string;
}

export const MenuCard= (props : CardProps) => { 
  const propUrl=props.url
  const propPrice=props.price
  const propStars=props.stars
  const propName=props.name;

  const stars = [];

  for (let index = 0; index < propStars; index++) {
    stars.push(<div className="star active"></div>);
  }

  for (let index = propStars; index < 5; index++) {
    stars.push(<div className="star inactive"></div>);
  }

  return (
    <div className="card">
      <div className="card__image-container">
        <div className="card__image" style={{ backgroundImage: `url(${propUrl})`}}></div>
        {/* <img src={`${propUrl}`} alt="Salad" width="500" height="333" /> */}
      </div>
      <div className="card__info">
        <div className="car__info--title">
          <h3>{propName}</h3>
          <div className="bottom-row">Fresh & sweet</div>
        </div>
        <div className="card__info--price">
          <p>$ {propPrice}</p>
          <div className="stars-container bottom-row">
            {stars}
          </div>
        </div>
      </div>
    </div>
  );

}
