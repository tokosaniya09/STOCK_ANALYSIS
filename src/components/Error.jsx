// import { Link } from "react-router-dom";
// import emptyPlate from "../assets/nodatafound.png";

// export default function Error({ message, explanation }) {
//   return (
//     <div className="not-found-container">
//       <img src={emptyPlate} className="not-found-image" alt="" />
//       <h1 className="not-founded-header">{message ? message : "Oh no!"}</h1>
//       <p>{explanation ? explanation : "Something went wrong"}</p>
//       <Link to="/">Go Back</Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import emptyPlate from "../assets/nodatafound.png";

export default function Error({ message, explanation }) {
  return (
    <div className="not-found-container flex flex-col items-center justify-center text-center p-4 sm:p-8 md:p-12 lg:p-16">
      <img 
        src={emptyPlate} 
        className="not-found-image w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80" 
        alt="" 
      />
      <h1 className="not-found-header text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
        {message ? message : "Oh no!"}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
        {explanation ? explanation : "Something went wrong"}
      </p>
      <Link 
        to="/" 
        className="mt-4 text-blue-500 hover:text-blue-700 text-base sm:text-lg md:text-xl"
      >
        Go Back
      </Link>
    </div>
  );
}

