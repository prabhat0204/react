import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const getUserProfile = async () => {
  const response = await axios.get(`${API_BASE_URL}/user/profile`);
  return response.data;
};

export const updateUserProfile = async (data: any) => {
  const response = await axios.post(`${API_BASE_URL}/user/update`, data);
  return response.data;
};
