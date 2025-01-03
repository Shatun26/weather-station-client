import { FC } from 'react';
import s from './styles.module.scss';

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className={s.sidebar}>
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
