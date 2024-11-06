// import { Outlet } from "react-router-dom";

// export default function RecipeInfo({ instructions, image, ingredients }) {
//   return (
//     <div className="recipe-info">
//       <Outlet context={{ instructions, ingredients }} />
//       <img className="recipe-img" src={image} alt="" />
//     </div>
//   );
// }


import { Outlet } from "react-router-dom";

export default function RecipeInfo({ instructions, image, ingredients }) {
  console.log("fsdfsd");
  return (
    <div className="recipe-info flex flex-col items-center p-4">
      I am happybvmb,jhjhl
      <Outlet context={{ instructions, ingredients }} />
      <img className="recipe-img w-full max-w-md h-auto mt-4 rounded-lg shadow-md" src={image} alt="" />
    </div>
  );
}
