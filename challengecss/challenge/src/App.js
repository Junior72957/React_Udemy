
import './App.css';
import Car from './components/Car';

function App() {

  const myCars = [
    {name: "Jetta 2.0 TSI", km: 15000, color: "Branco"},
    {name: "Golf GTI", km: 12000, color: "Cinza"},
    {name: "Jetta GLI", km: 1000, color: "Nardo Grey"},
    {name: "RS6", km: 0, color: "Cinza Metalico"},
    {name: "328i", km: 10, color: "Azul"},
  ];

  return (
    <div className="App">
      <h1>Showroom de Carros;</h1>
      <div className="car-container">
        {myCars.map((car) =>
          <Car car={car}/>
        )}
      </div>
    </div>
  );
}

export default App;
