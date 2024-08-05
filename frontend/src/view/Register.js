import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const navigateTo = useNavigate();
  const handleSendOtp = () => {
    console.log('mobileNumber', mobileNumber);
    toast.success('Otp sent to your mobile number!');
    navigateTo('/enter-otp');
  };
  return (
    <div className="container">
      <h2>Welcome to WeChat</h2>
      <p>Enter your mobile number to register</p>
      <PhoneInput
        className="number"
        country={'in'}
        value={mobileNumber}
        onChange={setMobileNumber}
      />
      <button
        variant="primary"
        onClick={handleSendOtp}
        disabled={!mobileNumber}
      >
        Send OTP
      </button>
    </div>
  );
};

export default Register;
