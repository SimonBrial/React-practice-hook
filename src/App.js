import './App.css';
import Header from './components/Header';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <Header title="Rick and Morty"/>
      <Character />
    </div>
  );
}

export default App;
