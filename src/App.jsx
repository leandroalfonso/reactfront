import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import api from "./Api";

function App() {
  const [count, setCount] = useState([]);

  const [entrada, setEntrada] = useState("");
  const [entrada2, setEntrada2] = useState("");

  function add(e){
    api.post("dados", { nome: entrada, descricao: entrada2 }).then((res) => {
      setCount([...count, res.data]);
      e.preventDefault();
      setEntrada("");
      setEntrada2("");
      alert('inserido com sucesso')
     

    });
  }

  useEffect(() => {
    api.get("dados").then((res) => {
      setCount(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          onChange={(e) => {
            setEntrada(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setEntrada2(e.target.value);
          }}
        />
        <button onClick={add}>enviar</button>
    
        </div>

      {count.map((item) => (
        <div className="itens">
          <p><strong>{item.nome}</strong>-{item.descricao}</p>
        </div>
      ))}
 
    </div>
  );

}

export default App;
