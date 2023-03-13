import './App.css';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AddRoom from './pages/AddRoom'
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/book/:roomid' element={<Booking/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/admin/add' element={<AddRoom/>} />
        </Routes>

    </div>
  );
}

export default App;
