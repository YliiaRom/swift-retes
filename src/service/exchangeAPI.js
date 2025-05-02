import axios from 'axios';
//axios.create({baseURL:"x", haeders:{apikey:'y'} })

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/',
  headers: { apikey: 'CvjdNvrh09wFXxRatpulFyygYhALcN5h' },
});

export const exchangeCurrency = async request => {
  const {
    //await s.get('a', {params: request})
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: request,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async baseCurrency => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
