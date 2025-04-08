import { useState } from "react";
import "./App.css";

function ModalAdicionar() {

    const [fruits, setFruits] = useState([]);
    const [modalFruit, setmodalFruit] = useState(null);
    const [modalCreateFruit, setmodalCreateFruit] = useState({ result: "" });
    const [newFruit, setNewFruit] = useState({
        description: "",
        a: "",
        b: "",
    });
    const [result, setResult] = useState(null);

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
    };

    return (
        <div>
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


export default ModalAdicionar;
