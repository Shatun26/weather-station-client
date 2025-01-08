import { FC } from 'react';
import s from './styles.module.scss';
import c from '../../shared/styles/common-styles.module.scss';
import clsx from 'clsx';

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className={clsx(c.viewBlock, s.sidebar)}>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
      <p>Sidebar</p>
    </div>
  );
};

export default Sidebar;
