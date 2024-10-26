import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";

const FbSignIn = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log("Login Success Please Proceed", response);
    navigate("/dashboard");
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed", error);
  };
  return (
    <div className="flex justify-center items-center mt-2">
      <LoginSocialFacebook
        appId="8682797421779361"
        onResolve={handleLoginSuccess}
        onReject={handleLoginFailure}
      >
        {/* Custom Facebook button */}
        <button className="bg-blue-600 text-white text-center text-sm p-2 rounded flex items-center justify-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* Facebook Icon */}
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54v-2.207c0-2.507 1.492-3.89 3.772-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.772-1.63 1.563v1.874h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" />
          </svg>
          Sign in with Facebook
        </button>
      </LoginSocialFacebook>
    </div>
  );
};

export default FbSignIn;
