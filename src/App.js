import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PokeList from './components/PokeList';
import PokeRandom from './components/PokeRandom';




function App() {
  const [started, setStarted] = React.useState(false)
  const [startedrandom, setStartedrandom] = React.useState(false)


  ReactDOM.render(
    <>
      <button onClick={() => setStarted(true)} className="btn btn-primary">PokeList</button>
      <button onClick={() => setStartedrandom(true)} className="btn btn-primary">PokeRandom</button>
      { started && <PokeList />}
      { startedrandom && <PokeRandom />}

    </>
  , document.getElementById('root'));
}

export default App;
