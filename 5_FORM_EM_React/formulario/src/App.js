
import './App.css';
import MyForm from './componentes/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Eduardo", 
      email: "edu.jr@gmail.com", 
      bio: "Sou um vendedor", 
      role: "admin"}}/>
    </div>
    
  );
}

export default App;
