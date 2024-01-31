import logo from './logo.svg';
import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      
     
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <Pessoa
      nome="Rodrigo"
      idade="28"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
