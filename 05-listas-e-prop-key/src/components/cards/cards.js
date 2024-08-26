import Card from "../card/card";

const cardsTitle = ["Titulo card 01", "Titulo card 02", "Titulo card 03"];

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>

      <div>
        {cardsTitle.map((cardTitle, index) => (
          <Card key={cardTitle}>
            <h3>{cardTitle}</h3>
            <p>esse é um texto do card</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
