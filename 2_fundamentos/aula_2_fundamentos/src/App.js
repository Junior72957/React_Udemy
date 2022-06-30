//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
//css /syles
import './App.css';
import MyComponent from './components/MyComponent';



function App() {
  return (
    <div className="App">
      
          <h1 className= "titulo">Aula Fundamentos</h1>
       <FirstComponent/>
       <TemplateExpressions/>
       <MyComponent/>
       <Events/>
       <Challenge/>
      
    </div>
  );
}

export default App;
