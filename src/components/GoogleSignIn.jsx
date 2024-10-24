import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log("Login Success Please Proceed", response);
    navigate("/dashboard");
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed", error);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        locale="en"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <svg
              className="w-5 h-5 mr-2"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.26 0 5.944 1.135 8.11 2.966l6.026-6.026C33.724 3.527 29.14 1.5 24 1.5 14.82 1.5 7.134 7.498 4.226 15.9l7.478 5.84C13.652 16.09 18.464 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.145 24.545c0-1.607-.144-3.145-.405-4.636H24v9.773h12.385c-.535 2.87-2.07 5.267-4.385 6.902v5.73h7.105C42.86 37.18 46.145 31.43 46.145 24.545z"
              />
              <path
                fill="#4A90E2"
                d="M12.565 28.48l-7.477-5.84C3.454 25.142 2.5 29.447 2.5 34c0 4.553.953 8.858 2.587 12.36l7.478-5.84C10.708 37.16 9.5 33.744 9.5 30.5c0-2.805.708-5.45 2.065-7.52z"
              />
              <path
                fill="#FBBC05"
                d="M24 46.5c5.14 0 9.724-2.027 12.73-5.345l-7.104-5.73C27.582 36.865 25.29 37.5 24 37.5c-5.535 0-10.347-6.59-12.296-13.44l-7.478 5.84C7.134 40.502 14.82 46.5 24 46.5z"
              />
            </svg>
            Log in with Google
          </button>
        )}
      />
    </div>
  );
};

export default GoogleSignIn;
