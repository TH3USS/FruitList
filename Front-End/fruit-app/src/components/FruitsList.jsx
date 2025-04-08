import { useState } from "react";
import "./App.css";

function FruitsList() {

    const [fruits, setFruits] = useState([]);
    const [modalFruit, setmodalFruit] = useState(null);

    return (
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
    )

}

export default FruitsList;
