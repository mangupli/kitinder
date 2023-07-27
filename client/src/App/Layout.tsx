import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      {/* Тут отрисовывается компонент дочернего Route */}
      <Outlet />
    </>
  );
}
