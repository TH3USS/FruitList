import { useState, useEffect } from "react";
import "./App.css";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFruit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (!newFruit.description || !newFruit.a || !newFruit.b) {
      alert("Preencha todos os campos!");
      return;
    }

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
  };

  return (
    <div className="container">
      <h1>Lista de Frutas</h1>

      <button className="add-button" onClick={() => setmodalCreateFruit(true)}>
        + Adicionar Fruta
      </button>

      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>A</th>
            <th>B</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={index}>
              <td>{fruit.description}</td>
              <td>{fruit.a}</td>
              <td>{fruit.b}</td>
              <td className="action">
                <button
                  className="action-button"
                  onClick={() => setmodalFruit(fruit)}
                >
                  Selecionar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal SELECAO */}
      {modalFruit && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-button-close">
              {/* Close Button */}
              <button
                className="modal-button close"
                onClick={() => {
                  setResult("--");
                  setmodalFruit(null);
                }}
              >
                X
              </button>
            </div>

            <label>Descrição</label>
            <input type="text" value={modalFruit.description} disabled />

            <label>A</label>
            <input type="number" value={modalFruit.a} disabled />

            <label>B</label>
            <input type="number" value={modalFruit.b} disabled />

            <label>Resultado</label>
            <input
              className="modal-result"
              type="number"
              placeholder="--"
              value={result}
              disabled
            />

            {/* Operation Buttons */}
            <div className="modal-buttons">
              <button
                className="modal-button divide"
                onClick={() => setResult(parseFloat(modalFruit.a / modalFruit.b))}
              >
                Divisão
              </button>
              <button
                className="modal-button multiply"
                onClick={() => setResult(modalFruit.a * modalFruit.b)}
              >
                Multiplicação
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal ADICIONAR */}
      {modalCreateFruit && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-button-close">
              <button
                className="modal-button close"
                onClick={() => setmodalCreateFruit(false)}
              >
                X
              </button>
            </div>
            <h2>Adicionar Fruta</h2>

            <label>Descrição</label>
            <input
              type="text"
              name="description"
              value={newFruit.description}
              onChange={handleInputChange}
              placeholder="Digite a fruta"
            />

            <label>A</label>
            <input
              type="number"
              name="a"
              value={newFruit.a}
              onChange={handleInputChange}
              placeholder="Digite um número"
            />

            <label>B</label>
            <input
              type="number"
              name="b"
              value={newFruit.b}
              onChange={handleInputChange}
              placeholder="Digite outro número"
            />

            <div className="modal-buttons">
              <button className="modal-button add" onClick={handleAdd}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
