import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Watchpage from './pages/Watchpage';

function App() {
  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/watch' element = {<Watchpage />} />
      </Routes>
    </div>
  );
}

export default App;
