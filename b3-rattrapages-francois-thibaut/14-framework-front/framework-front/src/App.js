import './App.css';
import ProductsScreen from '../pages/ProductsScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      <h2>Bienvenue chez Picard</h2>
      <a href={ProductsScreen}>Voir nos produits</a>

      </header>
    </div> 
  );
}

export default App;
