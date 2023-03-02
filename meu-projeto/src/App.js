import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

function App() {

  const name = 'Maria'

  return (
    <div className="App">
      <SayMyName nome="Marcos" />
      <SayMyName nome="Chameison" />
      <SayMyName nome={name} />
      <Pessoa nome="Marcos" Idade="26" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
