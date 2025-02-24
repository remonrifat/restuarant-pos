import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      // TODO: Implement actual signup logic
      console.log('Signup attempt:', data);
      // Simulated signup (replace with actual authentication)
      navigate('/verify-otp');
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: err.message || 'Signup failed. Please try again.'
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
            Create your account
          </h3>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Full name must be at least 2 characters'
                    }
                  })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-2 border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } placeholder-gray-500 text-gray-900 dark:text-white dark:bg-[#2a2a2a] focus:outline-none focus:ring-[#D76527] focus:border-[#D76527] focus:z-10 sm:text-sm`}
                  placeholder="Full Name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400 dark:text-gray-500" />
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
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\+?880\s?1[3-9]\d{8}$/,
                      message: 'Invalid Bangladeshi phone number (e.g., +880 1XXXXXXXXX)'
                    }
                  })}
                  className={`appearance-none rounded-md relative block w-full px-10 py-2 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } placeholder-gray-500 text-gray-900 dark:text-white dark:bg-[#2a2a2a] focus:outline-none focus:ring-[#D76527] focus:border-[#D76527] focus:z-10 sm:text-sm`}
                  placeholder="+880 1XXXXXXXXX"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
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

            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <PasswordInput
                register={register}
                name="confirmPassword"
                validation={{
                  required: 'Please confirm your password',
                  validate: (value) => 
                    value === password || 'Passwords do not match'
                }}
                placeholder="Confirm Password"
                error={errors.confirmPassword}
              />
            </div>
          </div>

          {errors.root && (
            <div className="text-red-500 text-sm text-center">
              {errors.root.message}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#D76527] hover:bg-[#c55a22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D76527] transition-colors"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-[#D76527] hover:text-[#c55a22]">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;