import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const searchTrains = async (params) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/trains`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching train data:', error);
    return [];
  }
};