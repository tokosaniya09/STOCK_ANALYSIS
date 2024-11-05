// import { Link, useOutletContext, useParams } from "react-router-dom";

// export default function Ingredients() {
//   const { id } = useParams();
//   const { ingredients } = useOutletContext();

//   return (
//     <div className="recipe-info-container">
//       <div className="recipe-info-header">
//         <h3>INGREDIENTS</h3>
//         <Link to={`/recipe/${id}/instructions`} className="recipe-info-link">
//           Instructions
//         </Link>
//       </div>
//       {ingredients.map(({ raw_text, position }) => (
//         <div className="recipe-info-content-container" key={position}>
//           <p className="recipe-step">{position}</p>
//           <p className="recipe-text">{raw_text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


import { Link, useOutletContext, useParams } from "react-router-dom";

export default function Ingredients() {
  const { id } = useParams();
  const { ingredients } = useOutletContext();

  return (
    <div className="recipe-info-container p-4 md:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md">
      <div className="recipe-info-header flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold">INGREDIENTS</h3>
        <Link to={`/recipe/${id}/instructions`} className="recipe-info-link text-blue-500 hover:underline">
          Instructions
        </Link>
      </div>
      {ingredients.map(({ raw_text, position }) => (
        <div className="recipe-info-content-container mb-2" key={position}>
          <p className="recipe-step text-gray-600 font-semibold">{position}</p>
          <p className="recipe-text text-gray-800">{raw_text}</p>
        </div>
      ))}
    </div>
  );
}


