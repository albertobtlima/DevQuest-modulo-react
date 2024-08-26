import "./App.css";
import Button from "./components/button/button.js";
import Cards from "./components/cards/cards.js";
//import Card from "./components/card/card.js";

function App() {
  return (
    <>
      <Button label="Baixar CV" />
      <Button />

      <Cards />

      {/* <Card>
        <h3>Titulo card 01</h3>
        <p>esse é um texto do card</p>
      </Card> */}
    </>
  );
}

export default App;
