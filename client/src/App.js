import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserLogin from './pages/UserLogin/UserLogin';
import { createContext, useState } from 'react';
import AuthorizedRoute from './components/AuthorizedRoute';
import DisplayAnimalsPage from './pages/DisplayAnimalsPage/DisplayAnimalsPage';
import { getLoginToken } from './utils/authSessionStorage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

export const StateContext = createContext();

function App() {
  const loginToken = getLoginToken();
  const [state, setState] = useState({
    token: loginToken || undefined,
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
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
            <Route
              path="animals/:animalType"
              element={
                <AuthorizedRoute>
                  <DisplayAnimalsPage />
                </AuthorizedRoute>
              }
            />
            <Route path="/login" element={<UserLogin />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StateContext.Provider>
  );
}

export default App;
