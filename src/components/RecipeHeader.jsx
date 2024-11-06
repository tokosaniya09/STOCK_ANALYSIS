// import RecipeNutritionalFact from "./RecipeNutritionalFact";
// import { AiOutlineFire } from "react-icons/ai";
// import { CiWheat } from "react-icons/ci";
// import { BiCheese, BiCake } from "react-icons/bi";
// import { IoFishOutline } from "react-icons/io5";

// export default function RecipeHeader({ nutritionalFacts, name }) {
//   const nutritionalFactsArray = [
//     {
//       id: 1,
//       amount: nutritionalFacts.calories,
//       category: "calories",
//       Icon: AiOutlineFire,
//     },
//     {
//       id: 2,
//       amount: nutritionalFacts.carbohydrates,
//       category: "carbs",
//       Icon: CiWheat,
//     },
//     {
//       id: 3,
//       amount: nutritionalFacts.fat,
//       category: "fats",
//       Icon: BiCheese,
//     },
//     {
//       id: 4,
//       amount: nutritionalFacts.protein,
//       category: "proteins",
//       Icon: IoFishOutline,
//     },
//     {
//       id: 5,
//       amount: nutritionalFacts.sugar,
//       category: "sugar",
//       Icon: BiCake,
//     },
//   ];

//   return (
//     <div className="recipe-header">
//       <h1>{name}</h1>
//       <div className="nutritional-facts-container">
//         {nutritionalFactsArray.map(({ Icon, id, amount, category }) => (
//           <RecipeNutritionalFact fact={{ amount, category }} key={id}>
//             <Icon />
//           </RecipeNutritionalFact>
//         ))}
//       </div>
//     </div>
//   );
// }

import RecipeNutritionalFact from "./RecipeNutritionalFact";
import { AiOutlineFire } from "react-icons/ai";
import { CiWheat } from "react-icons/ci";
import { BiCheese, BiCake } from "react-icons/bi";
import { IoFishOutline } from "react-icons/io5";

export default function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts.calories,
      category: "calories",
      Icon: AiOutlineFire,
    },
    {
      id: 2,
      amount: nutritionalFacts.carbohydrates,
      category: "carbs",
      Icon: CiWheat,
    },
    {
      id: 3,
      amount: nutritionalFacts.fat,
      category: "fats",
      Icon: BiCheese,
    },
    {
      id: 4,
      amount: nutritionalFacts.protein,
      category: "proteins",
      Icon: IoFishOutline,
    },
    {
      id: 5,
      amount: nutritionalFacts.sugar,
      category: "sugar",
      Icon: BiCake,
    },
  ];

  return (
    <div className="recipe-header p-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <div className="nutritional-facts-container flex flex-wrap justify-around">
        {nutritionalFactsArray.map(({ Icon, id, amount, category }) => (
          <RecipeNutritionalFact fact={{ amount, category }} key={id} className="flex items-center mb-4">
            <Icon className="mr-2" />
          </RecipeNutritionalFact>
        ))}
      </div>
    </div>
  );
}

