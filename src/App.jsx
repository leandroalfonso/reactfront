import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import api from "./Api";


function App() {
  const [count, setCount] = useState([]);
 
  const [entrada, setEntrada] = useState("");
  const [entrada2, setEntrada2] = useState("");

function add(){
    api.post("dados", {nome: entrada, descricao:entrada2}).then((res) => {
      setCount([...count, res.data]);
    });
}

  useEffect(() => {
    api.get("dados").then((res) => {
      setCount(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
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
        {entrada}
      </div>

      {count.map((item) => (
        <div>
          <p>{item.nome}-</p>
        </div>
      ))}
    </div>
  );
}

export default App;
