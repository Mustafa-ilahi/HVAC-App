import axios from 'axios';
import { axiosInstance } from '../AxiosInstance';
import { BASE_URL } from '../AxiosInstance';

export const checkServerConnection = async () => {
  try {
    const response = await axiosInstance.get('');
    return response;
  } catch (error) {
    return error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await axiosInstance.post('auth/signin', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const findExistingEmail = async email => {
  try {
    const response = await axiosInstance.post('auth/checkEmail', { email });
    return response;
  } catch (error) {
    return error;
  }
};


export const forgotPassword = async email => {
  try {
    const response = await axiosInstance.post('auth/forgotPassword', { email });
    return response;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (email, password) => {
  try {
    const response = await axiosInstance.post('auth/resetPassword', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const ownerSignUp = async body => {
  try {
    const response = await axiosInstance.post('auth/ownerSignup', body);
    return response;
  } catch (error) {
    return error;
  }
};

export const signUp = async body => {
  try {
    const response = await axiosInstance.post('auth/signup', body);
    return response;
  } catch (error) {
    return error;
  }
};

export const createGroup = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('group/create', body, { headers });
    return response;
  } catch (error) {
    return error;
  }
};

export const uploadProfile = async formData => {
  try {
    const axiosConfig = {
      method: 'post',
      url: `${BASE_URL}api/uploadProfile`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const data = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};

export const uploadProblemImage = async (formData, token) => {
  console.log("tokennnnn", token);
  try {
    const axiosConfig = {
      method: 'post',
      url: `${BASE_URL}api/uploadProblemImage`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };
    const data = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};

export const sendInvitation = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('group/sendInvitation', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const verifyCode = async (groupCode) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await axiosInstance.post('group/verifyCode', { groupCode }, { headers })
    return response
  } catch (error) {
    return error
  }
}

export const newRequest = async (token, body) => {
  try {

    const response = await axiosInstance.post('api/createRequest', body, { headers })
    return response
  }
  catch (error) {
    return error

  };
}
 
export const editProfile = async (token, body) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

    const response = await axiosInstance.post('api/updateProfileInfo', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const changePassword = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('api/updatePassword', body, {
      headers,
    });
    console.log(token);
    return response;
  } catch (error) {
    return error;
  }
};
