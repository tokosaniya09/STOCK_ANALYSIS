import Card from "./Card";

export default function CardList({ recipes }) { // Renamed to stocks
  console.log("hp",recipes);
  return (
    <section className="cards">
      {recipes && recipes.map((recipe) => (
        <Card key={recipe.name} recipe={recipe} /> // Renamed to stock
      ))}
    </section>
  );
}


// import Card from "./Card";

// export default function CardList({ recipes }) {
//   console.log(recipes);
//   return (
//     <section className="cards">
//       {recipes.map((recipe) => (
//         <Card key={recipe.additional_text} recipe={recipe} />
//       ))}
//     </section>
//   );
// }
