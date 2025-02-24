import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaShieldAlt } from 'react-icons/fa';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      otp: ''
    }
  });

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    if (countdown === 0) {
      setCanResend(true);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const onSubmit = async (data) => {
    try {
      // TODO: Implement actual OTP verification logic
      console.log('OTP Verification attempt:', data);
      
      // Simulated OTP verification
      if (data.otp === '123456') {
        navigate('/dashboard');
      } else {
        setError('otp', {
          type: 'manual',
          message: 'Invalid OTP. Please try again.'
        });
      }
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: err.message || 'OTP Verification failed. Please try again.'
      });
    }
  };

  const handleResendOTP = () => {
    if (canResend) {
      // TODO: Implement OTP resend logic
      console.log('Resending OTP');
      setCountdown(60);
      setCanResend(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#242424] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-[#D76527] text-5xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Verify OTP
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter the 6-digit code sent to your registered email/phone
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="otp" className="sr-only">OTP</label>
              <input
                id="otp"
                type="text"
                {...register('otp', {
                  required: 'OTP is required',
                  pattern: {
                    value: /^\d{6}$/,
                    message: 'OTP must be 6 digits'
                  }
                })}
                maxLength={6}
                className={`appearance-none rounded-md relative block w-full px-4 py-2 border ${
                  errors.otp ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } placeholder-gray-500 text-gray-900 dark:text-white dark:bg-[#2a2a2a] text-center tracking-[10px] text-2xl focus:outline-none focus:ring-[#D76527] focus:border-[#D76527] focus:z-10 sm:text-sm`}
                placeholder="------"
              />
              {errors.otp && (
                <p className="text-red-500 text-xs mt-1 text-center">
                  {errors.otp.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {countdown > 0 ? `Resend OTP in ${countdown}s` : ''}
              </span>
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={!canResend}
                className={`text-sm ${
                  canResend 
                    ? 'text-[#D76527] hover:text-[#c55a22]' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                Resend OTP
              </button>
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
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;