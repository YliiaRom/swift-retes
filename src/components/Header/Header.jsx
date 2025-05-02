import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { MdCurrencyExchange } from 'react-icons/md';

import styles from './Header.module.css';
import { selectorBaseCurrency } from '../../redux/currency/slice';
import SelectRates from '../../components/SelectRates/SelectRates';
import { useSelector } from 'react-redux';

const Layoute = () => {
  const currency = useSelector(selectorBaseCurrency);
  // const currency = useSelector(selectorBaseCurrency);

  // const addActive = ({ isActive }) => (isActive ? styles.active : styles.link);
  const addActive = ({ isActive }) => (isActive ? styles.active : styles.link);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MdCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                {/* <NavLink to="/" className={addActive}>
                  Home
                </NavLink> */}
                <NavLink to="/" className={addActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rates" className={addActive}>
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {currency && <SelectRates />}
        {currency && <p className={styles.currency}> {currency}</p>}
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layoute;
