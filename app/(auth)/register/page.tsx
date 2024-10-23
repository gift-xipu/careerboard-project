'use client';

import AuthForm from '@/components/auth/AuthForm'
import { FC } from 'react'

const RegisterPage: FC = () => {
  const handleRegister = (data: { email: string; password: string; name?: string }) => {
    // Handle registration logic here
    console.log('Registration data:', data);
    // You would typically make an API call here to create a new user account
  };

  return <AuthForm mode="register" onSubmit={handleRegister} />;
};

export default RegisterPage;