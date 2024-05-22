
import './App.css';
import { Cart } from './components/Card';
import { Usuario } from './components/Usuario';





function App() {

  return (
    <div>
    <Usuario nombre="johnny" edad={32} nacionalidad="bolivia"/>
    <Usuario nombre="suri" edad={34} nacionalidad="bolivia"/>
    <Cart/>
    </div>
  );
}

export default App;
