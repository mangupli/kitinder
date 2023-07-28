import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import UpdatePage from '../features/update/UpdatePage';
import Main from '../features/main/Main';
import Tinder from '../features/main/Tinder';
import Final from '../features/main/Final';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/final" element={<Final />} />
        <Route path="/tinder" element={<Tinder />} />
        <Route path="/update-whales" element={<UpdatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
