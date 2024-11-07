import { useNavigate } from "react-router-dom";

export default function Card({ recipe }) {
  const { name, price, changePercent, regularmarketchange } = recipe;
  const navigate = useNavigate();

  const navigateToRecipePage = () => {
    navigate(`/recipe/${name}`);
  };
  return (
    <div className="card" onClick={navigateToRecipePage}>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <p>Price: ${price}</p>
          <p>Change: {changePercent}%</p>
          {regularmarketchange && <p>Market Change: {regularmarketchange}</p>}
        </div>
      </div>
    </div>
  );
}