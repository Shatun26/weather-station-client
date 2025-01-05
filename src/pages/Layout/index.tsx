import Header from '@/widgets/header/header';
import Sidebar from '@/widgets/sidebar/sidebar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './styles.module.scss';
import { useCurrentUserQuery } from '@/entites/api/instances/user/hooks/useCurrentUserQuery';
import { Loader } from '@/shared/ui/loader/loader';
export const Layout: FC = () => {
  const { isError, isFetching } = useCurrentUserQuery();

  if (isFetching) return <Loader />;

  if (isError) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        Something went wrong
      </div>
    );
  }

  return (
    <div className={s.mainLayout}>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};
