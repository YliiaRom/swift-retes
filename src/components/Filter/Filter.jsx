import { useDispatch, useSelector } from 'react-redux';
import { selectRatesFilter, setRatesFilter } from '../../redux/currency/slice';
import styles from './Filter.module.css';
setRatesFilter;
const Filter = () => {
  const filterValue = useSelector(selectRatesFilter);
  const dispatch = useDispatch();
  return (
    <input
      value={filterValue}
      onChange={e => dispatch(setRatesFilter(e.target.value))}
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};

export default Filter;
