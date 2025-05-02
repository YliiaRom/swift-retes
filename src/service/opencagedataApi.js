import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = import.meta.env.VITE_OPENCAGEDATA_KEY;
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });

  return data;
};
