import React, { useState } from 'react';
import Otp from '../components/Otp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OtpVerfication = () => {
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigateTo = useNavigate();

  const handleOTPVerification = () => {
    console.log(otp);
    toast.success('Otp verified successfully!');
    navigateTo('/profile');
  };
  return (
    <div className="container">
      <h2>Enter the OTP</h2>
      <Otp length={6} onChangeOTP={setOtp} />
      <button onClick={handleOTPVerification}>Verify OTP</button>
      {isVerified && <p>OTP Verified!</p>}
    </div>
  );
};

export default OtpVerfication;
