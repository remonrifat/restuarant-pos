import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      // TODO: Implement actual login logic
      console.log('Login attempt:', data);
      // Simulated login (replace with actual authentication)
      navigate('/dashboard');
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: err.message || 'Login failed. Please check your credentials.'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#242424] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            HS Cooking POS
          </h2>
          <h3 className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account
          </h3>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } placeholder-gray-500 text-gray-900 dark:text-white dark:bg-[#2a2a2a] focus:outline-none focus:ring-[#D76527] focus:border-[#D76527] focus:z-10 sm:text-sm`}
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <PasswordInput
                register={register}
                name="password"
                validation={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                }}
                placeholder="Password"
                error={errors.password}
              />
            </div>
          </div>

          {errors.root && (
            <div className="text-red-500 text-sm text-center">
              {errors.root.message}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#D76527] focus:ring-[#D76527] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-white">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/reset-password" className="font-medium text-[#D76527] hover:text-[#c55a22]">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#D76527] hover:bg-[#c55a22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D76527] transition-colors"
            >
              Sign In
            </button>
          </div>

          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-[#D76527] hover:text-[#c55a22]">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;