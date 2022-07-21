import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserLogin from './pages/UserLogin/UserLogin';
import { createContext, useState } from 'react';

export const StateContext = createContext();

function App() {
  const [state, setState] = useState({
    token: undefined,
  });

  return (
    <StateContext.Provider value={state}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StateContext.Provider>
  );
}

export default App;
