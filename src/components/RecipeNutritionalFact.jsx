// export default function RecipeNutritionalFact({ fact, children }) {
//   return (
//     <div className="recipe-fact-container">
//       {children}
//       <h3>{fact.amount}</h3>
//       <p>{fact.category}</p>
//     </div>
//   );
// }


export default function RecipeNutritionalFact({ fact, children }) {
  return (
    <div className="recipe-fact-container flex flex-col items-center p-2 border border-gray-300 rounded-lg shadow-sm bg-white w-full max-w-[120px] text-center">
      {children}
      <h3 className="text-lg font-bold">{fact.amount}</h3>
      <p className="text-sm text-gray-600">{fact.category}</p>
    </div>
  );
}
