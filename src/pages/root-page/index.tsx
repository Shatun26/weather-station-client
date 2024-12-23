import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './styles.module.scss';

export const Root: FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className={s.root}>weather-station-client</h1>
      <Outlet />
    </div>
  );
};
