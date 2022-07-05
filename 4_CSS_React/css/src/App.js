import './App.css';
import MyComponents from './components/MyComponents';
import {useState} from "react";
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = true;

  return (
    <div className="App">
      {/* Css global */}
      <h1>React com CSS</h1>
      {/* Css de Components */}
    <MyComponents/>
    <p>Esse paragrafo é do app.js</p>
    <p className="my-comp-paragraph"> Esté tambem é do componente</p>
    {/* Inline CSS */}
    <p style={{color: "blue", padding: "25px", borderTop: "5px solid red"}}>
      Esse elemento foi estilizado de forma inline</p>
      <p style={{color: "green", padding: "25px", borderTop: "5px solid red"}}>
      Esse elemento foi estilizado de forma inline</p>
      <p style={{color: "red", padding: "30px", borderTop: "5px solid red"}}>
      Esse elemento foi estilizado de forma inline</p>

      {/* Css inline dinamico */}
      <h2 style= {n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        Css dinamico</h2>
        <h2 style= {n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        Css dinamico</h2>
        <h2 style= {name === "Matheus" ? ({color: "green", backgroundColor: "black"}) : null}>
        Css dinamico</h2>

        {/* Classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este titulo vai ter classe dinamica</h2>

          {/* Css modules */}
          <Title/>
    
    </div>
  );
}

export default App;
