import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';

export const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
