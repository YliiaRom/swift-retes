import { Wave } from 'react-animated-text';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRates } from '../redux/currency/operations';
import { selectFilteredRates } from '../redux/currency/selectors';
import RatesList from '../components/RatesList/RatesList';
import { selectorBaseCurrency } from '../redux/currency/slice';
import Filter from '../components/Filter/Filter';

const Rates = () => {
  const isError = false;
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectorBaseCurrency);
  const rates = useSelector(selectFilteredRates);
  useEffect(() => {
    dispatch(getRates());
  }, [dispatch, baseCurrency]);
  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        <Filter />
        {rates.length > 0 && <RatesList rates={rates} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
