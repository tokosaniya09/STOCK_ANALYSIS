// import { Link, useParams, useOutletContext } from "react-router-dom";

// export default function Instructions() {
//   const { id } = useParams();
//   const { instructions } = useOutletContext();

//   return (
//     <div className="recipe-info-container">
//       <div className="recipe-info-header">
//         <h3>INSTRUCTIONS</h3>
//         <Link to={`/recipe/${id}/ingredients`} className="recipe-info-link">
//           Ingredients
//         </Link>
//       </div>
//       {instructions.map(({ display_text, position }) => (
//         <div className="recipe-info-content-container" key={position}>
//           <p className="recipe-step">{position}</p>
//           <p className="recipe-text">{display_text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { Link, useParams, useOutletContext } from "react-router-dom";

export default function Instructions() {
  const { id } = useParams();
  const { instructions } = useOutletContext();

  return (
    <div className="recipe-info-container p-4 md:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md">
      <div className="recipe-info-header flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold">INSTRUCTIONS</h3>
        <Link to={`/recipe/${id}/ingredients`} className="recipe-info-link text-blue-500 hover:underline">
          Ingredients
        </Link>
      </div>
      {instructions.map(({ display_text, position }) => (
        <div className="recipe-info-content-container mb-2" key={position}>
          <p className="recipe-step text-gray-600 font-semibold">{position}</p>
          <p className="recipe-text text-gray-800">{display_text}</p>
        </div>
      ))}
    </div>
  );
}

