
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
      <header className="App-header">
       <ItemListContainer greeting="💅🏽 BEAUTY FOR YOU 💅🏽"/>
      </header>
    </div>
  );
}

export default App;
