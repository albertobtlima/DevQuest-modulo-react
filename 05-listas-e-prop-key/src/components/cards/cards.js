import Card from "../card/card";

const cardsTitle = ["Titulo card 01", "Titulo card 02", "Titulo card 03"];

const showCardColor = (color) => {
  console.log(color);
};

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>

      <div>
        {cardsTitle.map((cardTitle, index) => (
          <Card key={index} showCardColor={showCardColor}>
            <h3>{cardTitle}</h3>
            <p>esse é um texto do card</p>
          </Card>
        ))}
        <Card color="blue" showCardColor={showCardColor}>
          <h3>com fundo azul</h3>
          <p>esse é um texto do card</p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
