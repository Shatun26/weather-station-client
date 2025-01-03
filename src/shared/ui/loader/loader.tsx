import { FC, useEffect, useRef, useState } from 'react';
import s from './styles.module.scss';

export const Loader: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const timerRef = useRef<NodeJS.Timeout>(
    setTimeout(() => {
      setIsVisible(true);
    }, 200)
  );

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={s.wrapper}>
      <div className={s.loader} />
    </div>
  );
};
