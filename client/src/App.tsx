import { Route, Routes } from 'react-router-dom';

import Login from './components/LogIn';
import SingUp from './components/SingUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
