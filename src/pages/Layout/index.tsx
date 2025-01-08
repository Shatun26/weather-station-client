import Header from '@/widgets/header/header';
import Sidebar from '@/widgets/sidebar/sidebar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './styles.module.scss';
import { useCurrentUserQuery } from '@/entites/api/instances/user/hooks/useCurrentUserQuery';
import { Loader } from '@/shared/ui/loader/loader';
import { AxiosError } from 'axios';

const ErrorElement = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>{text}</div>
);

export const Layout: FC = () => {
  const { isFetching, error } = useCurrentUserQuery();

  if (isFetching) return <Loader />;

  if (error) {
    if (error instanceof AxiosError && error.response) {
      if (error.response.status === 401) {
        return;
      }

      if (error.response.status >= 500) {
        return <ErrorElement text="Something went wrong" />;
      }

      if (error.response.status === 404) {
        return <ErrorElement text=" User not found" />;
      }
    }

    return <ErrorElement text=" An unexpected error occurred" />;
  }

  return (
    <div className={s.mainLayout}>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};
