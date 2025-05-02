import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency, latestRates } from '../../service/exchangeAPI';

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const data = await getUserInfo(crd);
      console.log(data.results[0].annotations.currency.iso_code);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      Boolean(!thunkAPI.getState().currency.baseCurrency);
    },
  },
);
export const getExchangeInfo = createAsyncThunk(
  'currency/getExchangeInfo ',
  async (request, thunkAPI) => {
    try {
      const data = await exchangeCurrency(request);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const getRates = createAsyncThunk(
  'currency/getRates',
  async (_, thunkAPI) => {
    //считать state валюты -> сделать запрос по дынным
    const { baseCurrency } = thunkAPI.getState().currency;
    try {
      const rates = await latestRates(baseCurrency);
      return rates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

//способ 2-не делать запрос если есть значение в LS
// const { baseCurrency } = thunkAPI.getState().currency;
//     if (baseCurrency) {
//       return thunkAPI.fulfillWithValue(baseCurrency);
//     }
//
//
//
// export const getBaseCurrency = createAsyncThunk(
//   'currency/getBaseCurrency',
//   async (crd, thunkAPI) => {
//     const { baseCurrency } = thunkAPI.getState().currency;
//     if (baseCurrency) {
//       return thunkAPI.fulfillWithValue(baseCurrency);
//     }
//     console.log(baseCurrency);
//     try {
//       const data = await getUserInfo(crd);
//       console.log(data.results[0].annotations.currency.iso_code);
//       return data.results[0].annotations.currency.iso_code;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
