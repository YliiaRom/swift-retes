import { createSlice } from '@reduxjs/toolkit';
import { getBaseCurrency, getExchangeInfo, getRates } from './operations';

export const sliceCurrency = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    exchangeInfo: {
      to: 'UAH',
      from: 'USD',
      amount: 15,
      rate: 37.5,
      result: 562.5,
    },
    isLoading: false,
    isError: false,
    ratesFilter: '',
    rates: [],
  },
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
    setRatesFilter: (state, { payload }) => {
      state.ratesFilter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBaseCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(getExchangeInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.exchangeInfo = payload;
      })
      .addCase(getExchangeInfo.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getExchangeInfo.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getRates.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.rates = payload;
      })
      .addCase(getRates.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getRates.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
  selectors: {
    selectorBaseCurrency: state => state.baseCurrency,
    selectExchangeInfo: state => state.exchangeInfo,
    selectorIsLoading: state => state.isLoading,
    selectorIsError: state => state.isError,
    selectRatesFilter: state => state.ratesFilter,
    selectRates: state => state.rates,
  },
});
export const {
  selectorBaseCurrency,
  selectExchangeInfo,
  selectorIsLoading,
  selectorIsError,
  selectRatesFilter,
  selectRates,
} = sliceCurrency.selectors;
export const { setBaseCurrency, setRatesFilter } = sliceCurrency.actions;
