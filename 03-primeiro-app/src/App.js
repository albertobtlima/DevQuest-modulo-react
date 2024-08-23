import "./App.css";
import Button from "./components/button/button.js";
import Card from "./components/card/card.js";

function App() {
  return (
    <>
      <Button />
      <Button />

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
    </>
  );
}

export default App;
