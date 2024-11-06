import { useNavigate } from "react-router-dom";

export default function Card({ recipe }) {
  // console.log("stock.name", recipe.name, "stock.regular", recipe.regularmarketchange);
  const { name, price, changePercent, regularmarketchange } = recipe;
  console.log("bla",name, price, changePercent, regularmarketchange);
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




// import { useNavigate } from "react-router-dom";

// export default function Card({ recipe }) {
//   const { additional_text, name, listing_date, issue_price } = recipe;

// const navigate = useNavigate();

//   const navigateToRecipePage = () => {
//     navigate(/recipe/${issue_price}/instructions);
//   };
  
//   return (
//     <div className="card" onClick={navigateToRecipePage}>
      
//       {/* <img src={thumbnail_url} alt="" /> */}
//       <div className="card-content">
//         <h3>{name}</h3>
//         <div className="card-info">
//           <div className="tag">
//             {<p>{additional_text}</p>}
//           </div>
//           {<p className="time-text">{listing_date}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }