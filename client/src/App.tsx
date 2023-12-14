import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

function App(): JSX.Element {
  return (
    <Routes>
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
       
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/region" element={<Тут регион будет />} />
          <Route path="/tours" element={<Тут админ панель />} /> */}

          
    </Routes>
  );
}

export default App;
