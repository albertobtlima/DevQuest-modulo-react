import Card from "../card/card";

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>

      <div>
        <Card>
          <h3>Titulo card 01</h3>
          <p>esse é um texto do card</p>
        </Card>
        <Card>
          <h3>Titulo card 02</h3>
          <p>esse é um texto do card</p>
        </Card>
        <Card>
          <h3>Titulo card 03</h3>
          <p>esse é um texto do card</p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
