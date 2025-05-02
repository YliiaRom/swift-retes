import { selectRates, selectRatesFilter, selectorBaseCurrency } from './slice';
import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredRates = createSelector(
  [selectRates, selectorBaseCurrency, selectRatesFilter],
  (rates, baseCurrency, filterRates) => {
    return rates
      .filter(
        ([key]) =>
          key !== baseCurrency &&
          key.toLowerCase().includes(filterRates.toLowerCase()),
      )
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
