import { useNavigate } from "react-router-dom";

export default function Card({ recipe }) {
  const { additional_text, name, listing_date, issue_price } = recipe;

const navigate = useNavigate();

  const navigateToRecipePage = () => {
    navigate(`/recipe/${issue_price}/instructions`);
  };
  
  return (
    <div className="card" onClick={navigateToRecipePage}>
      
      {/* <img src={thumbnail_url} alt="" /> */}
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            {<p>{additional_text}</p>}
          </div>
          {<p className="time-text">{listing_date}</p>}
        </div>
      </div>
    </div>
  );
}
