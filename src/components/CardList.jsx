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


import Card from "./Card";

export default function CardList({ recipes }) {
  console.log("hp",recipes);
  return (
    <section className="cards grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {recipes.map((recipe) => (
        <Card key={recipe.additional_text} recipe={recipe} />
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
