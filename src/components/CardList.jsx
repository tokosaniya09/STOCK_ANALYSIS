import Card from "./Card";

export default function CardList({ recipes }) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.additional_text} recipe={recipe} />
      ))}
    </section>
  );
}