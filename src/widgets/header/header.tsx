import { FC } from 'react';
import s from './styles.module.scss';
import { useLocation } from 'react-router-dom';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <div className={s.routesTitle}>
        <span className={s.prePath}>Pages </span>
        {location.pathname
          .split('/')
          .slice(1)
          .map(item => {
            return (
              <span key={item}>
                <span> / </span>
                <span className={s.pathSegment}>{item}</span>
              </span>
            );
          })}
        <h1>{location.pathname.split('/').slice(-1)}</h1>
      </div>
    </header>
  );
};

export default Header;
