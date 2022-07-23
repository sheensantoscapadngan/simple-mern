import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserLogin from './pages/UserLogin/UserLogin';
import { createContext, useState } from 'react';
import AuthorizedRoute from './components/AuthorizedRoute';

export const StateContext = createContext();

function App() {
  const [state, setState] = useState({
    token: undefined, //check first localstorage if naay token na store, if naa mao ang value gamiton
  });

  return (
    <StateContext.Provider value={state}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AuthorizedRoute>
                  <HomePage />
                </AuthorizedRoute>
              }
            />
            <Route path="/login" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StateContext.Provider>
  );
}

export default App;
