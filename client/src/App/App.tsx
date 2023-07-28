import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { ProcessEnv } from '../types/ProccessEnv';
import UpdatePage from '../features/update/UpdatePage';
import Main from '../features/main/Main';
import Tinder from '../features/main/Tinder';
import Final from '../features/main/Final';

function App(): JSX.Element {
  const env: ProcessEnv = {
    REACT_APP_SECRET_ROUTE: process.env.REACT_APP_SECRET_ROUTE as string,
  };

  const secretPath = env.REACT_APP_SECRET_ROUTE;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/final" element={<Final />} />
        <Route path="/tinder" element={<Tinder />} />
        <Route path={`/${secretPath}`} element={<UpdatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
