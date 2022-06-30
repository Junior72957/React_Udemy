import './App.css';

import Moto from './assets/crf.jpg';
import ManageData from './components/ManageData';

function App() {
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
  
    </div>
    
  );
}

export default App;
