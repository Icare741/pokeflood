import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PokeList from './components/PokeList';
import PokeRandom from './components/PokeRandom';

function App() {
  const [started, setStarted] = React.useState(false)
  const [pokeRandom, setPokeRandom] = React.useState(null)

  const handlePokeRandomClick = () => {
    setPokeRandom(<PokeRandom />);
  }

  return (
    <>
      <button onClick={() => setStarted(true)} className="btn btn-primary">PokeList</button>
      <button onClick={handlePokeRandomClick} className="btn btn-primary">PokeRandom</button>
      { started && <PokeList />}
      { pokeRandom }
    </>
  )
}

export default App;
