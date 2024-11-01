"use client";
import React, { useState } from 'react';

//these are the types for the prop, since I have the loginSchema, I need to have the name included.
type AuthFormProps = {
  mode: 'signIn' | 'register';
  onSubmit: (data: { email: string; password: string; name?: string; }) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Added state for checkbox

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(mode === 'signIn' ? { email, password } : { email, password, name });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-inherit">
      <div className="w-full max-w-md">
        <div className="bg-inherit shadow-2xl rounded-lg p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {mode === 'signIn' ? 'Sign in to your account' : 'Create your account'}
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="form-control">
                <label htmlFor="fullName" className="label">
                  <span className="label-text text-gray-700">Full Name</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full bg-white/80 border border-gray-200 
                           text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-primary/50 transition-all duration-300"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text text-gray-700">Email address</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white/80 border border-gray-200 
                           text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-primary/50 transition-all duration-300"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-white/80 border border-gray-200 
                           text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-primary/50 transition-all duration-300"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {mode === 'signIn' && (
              <div className="flex items-center justify-between">
                <label className="label cursor-pointer inline-flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} // Handle checkbox state
                  />
                  <span className="label-text ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            )}
            <button className="btn btn-primary w-full">
              {mode === 'signIn' ? 'Sign in' : 'Register'}
            </button>
          </form>
          <div className="text-center text-sm text-gray-600">
            {mode === 'signIn' ? (
              <>
                Dont have an account?{' '}
                <a href="/register" className="text-primary hover:underline">Register here</a>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <a href="/login" className="text-primary hover:underline">Sign in</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
