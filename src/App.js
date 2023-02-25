import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Application/Home';
import Login from './Application/Login';
import Details from './Application/Details';
import Errror from './Application/Errror';
import Mix from './Application/Main'
import {Routes,Route} from "react-router-dom"
import CartPage from './Application/cartPage';

function App() {
  return (
  <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Mix/>} />
      <Route path='/account' element={<Details />} />
      <Route path='*' element={<Errror />} />
      <Route path='/CartPage'element={<CartPage/>} />
    </Routes>
  </>
  );
}

export default App;