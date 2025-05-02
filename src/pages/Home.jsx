import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import {
  selectExchangeInfo,
  selectorIsError,
  selectorIsLoading,
} from '../redux/currency/slice';
import { useSelector } from 'react-redux';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';
import Loader from '../components/Loader/Loader';
const Home = () => {
  const exchengeInfo = useSelector(selectExchangeInfo);
  const isError = useSelector(selectorIsError);
  const isLoading = useSelector(selectorIsLoading);

  console.log(exchengeInfo);
  return (
    <Section>
      <Container>
        <ExchangeForm />
        {exchengeInfo ? (
          <ExchangeInfo />
        ) : (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
