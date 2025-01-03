import { ChangeEvent, FC, useState } from 'react';
import s from './styles.module.scss';
import { useLoginMutation } from '@/entites/api/instances/auth/hooks/useLoginMutation';
import { loginRequest } from '@/entites/api/instances/auth/types';

export const AuthPage: FC = () => {
  const [credentials, setCredentials] = useState<{ email: string | null; password: string | null }>({
    email: null,
    password: null,
  });

  const loginMutation = useLoginMutation();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setCredentials(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const onSubmit = () => {
    const { email, password } = credentials;

    if (email && password) {
      const payload: loginRequest = {
        email,
        password,
      };
      loginMutation.mutate(payload);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <h1>Login</h1>
        <input type="text" name="email" onChange={onChange} />
        <input type="password" name="password" onChange={onChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};
