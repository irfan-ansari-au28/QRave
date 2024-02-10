import axios from 'axios';

import axios from 'axios';

export const sendOtp = async (mobile) => {
  const options = {
    method: 'POST',
    url: 'https://api.msg91.com/api/v5/otp',
    params: { mobile: mobile },
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authkey: process.env.MSG91_AUTH_KEY
    },
    data: JSON.stringify({
      // Replace these parameters as required by MSG91 API
      // For example, "sender", "otp", "otp_expiry", etc.
      Param1: 'value1',
      Param2: 'value2',
      Param3: 'value3'
    })
  };

  try {
    const response = await axios(options);
    console.log(response.data);
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};


export const verifyOtp = async (phoneNumber, otp) => {
  const response = await axios.get(`https://control.msg91.com/api/v5/otp/verify`, {
    params: {
      authkey: process.env.MSG91_AUTH_KEY,
      mobile: phoneNumber,
      otp: otp,
    },
  });

  return response.data; // Handle verification result
};

