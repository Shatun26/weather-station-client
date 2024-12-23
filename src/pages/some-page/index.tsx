import { getCharDataFetch } from '@/app/entites/api/example-instances-group/api';
import { FC, useEffect } from 'react';

export const SomePage: FC = () => {
  const getCharData = async () => {
    try {
      const res = await getCharDataFetch();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content', gap: '10px' }}>
        <button>Get char data</button>
        <button>Send 1 char data</button>
        <button>Send 20 char data</button>
        <button>Clear all char data</button>
      </div>
    </div>
  );
};
