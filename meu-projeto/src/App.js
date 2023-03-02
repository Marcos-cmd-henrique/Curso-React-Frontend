import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const name = 'Maria'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="GEOVANE BRANDÃO" />
      <SayMyName nome="Chameison" />
      <SayMyName nome={name} />
      <Pessoa nome="Marcos" Idade="26" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
