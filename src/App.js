import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Swal from 'sweetalert2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-danger">PC HardMarket</h1>
      <Navbar/>
      </header>
      <body className="App-body">
        <div>
          <ItemListContainer greeting={'Nuestra seleccion de productos'}/>
          <Cards/>
        </div>
      </body>

    </div>
  );
}

export default App;
