import Select from 'react-select';

import symbols from './symbols.json';
import styles from './SelectRates.module.css';

import './ReactSelect.css';
import {
  selectorBaseCurrency,
  setBaseCurrency,
} from '../../redux/currency/slice';
import { useDispatch, useSelector } from 'react-redux';

const SelectRates = () => {
  const currency = useSelector(selectorBaseCurrency);
  const dispatch = useDispatch();

  //если поменяли валюту
  // selectedOption- значение в библиотеке;
  const handleChange = selectedOption => {
    console.log(selectedOption);
    console.log(selectedOption.value);
    //actyon.payload = 'x'
    dispatch(setBaseCurrency(selectedOption.value));
  };
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        value={{ label: currency, value: currency }}
        onChange={handleChange}
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
        //список в файле - symbol.json
        options={symbols}
      />
    </div>
  );
};

export default SelectRates;
