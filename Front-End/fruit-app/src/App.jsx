import { useState, useEffect } from "react";
import "./App.css";
import FruitsList from './components/FruitsList'
import ModalSelecao from './components/ModalSelecao'
import ModalAdicionar from './components/ModalAdicionar'

const API_URL = "https://localhost:7279/api/fruits";

function App() {
  const [fruits, setFruits] = useState([]);
  const [modalFruit, setmodalFruit] = useState(null);
  const [modalCreateFruit, setmodalCreateFruit] = useState({ result: "" });
  const [newFruit, setNewFruit] = useState({
    description: "",
    a: "",
    b: "",
  });
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  

  

    fetch("https://localhost:7279/api/fruits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: newFruit.description,
        a: parseFloat(newFruit.a),
        b: parseFloat(newFruit.b),
      }),
    }).then(() => {
      setmodalCreateFruit(false);
      setNewFruit({ description: "", a: "", b: "" }); // Limpar os campos
      window.location.reload();
    });
  

  return (
    <div className="container">
      <h1>Lista de Frutas</h1>

      <button className="add-button" onClick={() => setmodalCreateFruit(true)}>
        + Adicionar Fruta
      </button>

      <FruitsList/>
      <ModalSelecao/>
      <ModalAdicionar/>

    </div>
  );
}


export default App;
