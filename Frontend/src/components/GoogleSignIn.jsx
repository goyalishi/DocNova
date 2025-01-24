import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { googleOauth } from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoogleSignIn = ({ buttonText }) => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await googleOauth(authResult['code']);
        const { email, name } = result.data.user;
        const { token } = result.data;

        const user ={
            email,name
        }
        
        localStorage.setItem('token', token);
        localStorage.setItem('user-info',JSON.stringify(user));

        navigate('/home');
      }
      console.log(authResult);
    } catch (error) {
      console.log(error.response);
      toast.error('Google sign-in failed.');
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code',
  });

  const handleGoogleSignIn = () => {
    googleLogin();
  };

  return (
    <button
          className="w-full flex items-center justify-center gap-2 bg-gray-300 border border-gray-600 rounded-lg py-2 px-4 text-black hover:bg-gray-400 transition duration-300 ease-in-out mb-4"
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            alt="Google Icon"
            className="w-6 h-6"
          />
          {buttonText}
        </button>
  );
};

export default GoogleSignIn;

