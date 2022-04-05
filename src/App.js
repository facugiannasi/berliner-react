
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a Berliner"}/>
    </>
  );
}

export default App;
