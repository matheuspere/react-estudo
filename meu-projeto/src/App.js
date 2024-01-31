import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Matheus'

  const url = 'https://images.pexels.com/photos/19809164/pexels-photo-19809164/free-photo-of-arte-modelo-de-moda-modelo-de-beleza-preto.jpeg'
  return (
    <div className="App">
      <h1> Alterando JSX</h1> 
      <p>Olá, {name}</p>
      <img src={url} alt='Minha Imagem' />
      <HelloWorld/>
    </div>
  );
}

export default App;
