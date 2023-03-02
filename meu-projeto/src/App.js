import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'DESENVOLVEDORES'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b 
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>DENO COMMUNITY</h1>
      <p>Ola, {newname}</p>
      <p>Somos: {sum(1,2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
