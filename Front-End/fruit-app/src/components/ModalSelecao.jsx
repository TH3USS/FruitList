import { useState } from "react";
import "./App.css";

function ModalSelecao() {
    
    const [fruits, setFruits] = useState([]);
    const [modalFruit, setmodalFruit] = useState(null);
    const [modalCreateFruit, setmodalCreateFruit] = useState({ result: "" });
    const [newFruit, setNewFruit] = useState({
        description: "",
        a: "",
        b: "",
    });
    const [result, setResult] = useState(null);

    return (
        <div>
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
  </div>
);

}

export default ModalSelecao;
