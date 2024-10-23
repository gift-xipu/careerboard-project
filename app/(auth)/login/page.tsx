'use client';

import AuthForm from '@/components/auth/AuthForm'
import { FC } from 'react'

const LoginPage: FC = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    // Handle login logic here
    console.log('Login data:', data);
    // You would typically make an API call here to authenticate the user
  };

  return <AuthForm mode="signIn" onSubmit={handleLogin} />;
};

export default LoginPage;