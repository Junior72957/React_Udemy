import { useState } from 'react';
import './App.css';

import Moto from './assets/crf.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import COntainer from './components/COntainer';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim";
  const[userName] = useState("Maria");
  
  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 2, brand: "Renault", color: "Preto", newCar: false, km: 89900},
    {id: 3, brand: "Hyundai", color: "Prata", newCar: false, km: 158980},
    {id: 4, brand: "BMW", color: "Azul", newCar: true, km: 4},
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  };

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users =[
    {id: 1, name: "Matheus", job: "Programador", age: 31},
    {id: 1, name: "Eduardo", job: "Vendedor", age: 23},
    {id: 1, name: "Robert", job: "Coordenador", age: 35},
    {id: 1, name: "Fernando", job: "Menor aprendiz", age: 17},
  ]

  return (
    <div className="App">
    <h1>Avançando em React</h1>
    {/*imagem em public*/}
    <div>
      <img src="/blusa.jpeg" alt="blusa" />
      </div>
      <div>
        <img src={Moto} alt="" />
      </div>
    <ManageData/>
    <ListRender/>
    <ConditionalRender/>
    {/* props */}
    <ShowUserName name={userName} />
    {/* destructuring */}
    <CarDetails brand="VW" km={100000} color="Azul" newCar ={false} />
    {/* reaproveitamento */}
    <CarDetails brand="Ford" km={1000} color="Verde" newCar ={false} />
    <CarDetails brand="Fiat" km={10} color="Laranja" newCar ={true} />
    {/* Loop em array de objetos */}
    {cars.map((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      km={car.km} 
      newCar={car.newCar} />
    ))}
    {/* fragment */}
    <Fragments propFragments= "teste" />
    {/* Children */}
    <COntainer myValue="testing">
      <p>E esse é o conteúdo</p>
       </COntainer>
       <COntainer myValue="testing 2">
      <h5>Testando o container</h5>
       </COntainer>
       {/* executar função */}
       <ExecuteFunction myFunction= {showMessage} />
      {/* state lift */}
      <Message msg = {message}/>
      <ChangeMessageState handleMessage={handleMessage} />  
      {/* Desafio */}
      {users.map((user) => (
        <UserDetails 
        key={user.id}
        name={user.name}
        job={user.job}
        age={user.age}
        
        /> 
      ))}
          
    </div>
    
  );
};

export default App;
