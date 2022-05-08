import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Watchpage from './pages/Watchpage';

function App() {
  return (
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/watch' element = {<Watchpage />} />
      </Routes>
  );
}

export default App;
