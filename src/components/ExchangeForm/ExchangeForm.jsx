import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { getExchangeInfo } from '../../redux/currency/operations';
import { useDispatch } from 'react-redux';

//патерн в "//"", методом test()- поверка на валидность
//і дані в форматі 15 USD in UAH.
const validPettern = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/;
// ^ - початок рядка.
// \d+ -відповідає одній або більше цифрам.
// (\.\d{1,2})? - відповідає десятковому розділовому знаку (крапці) та одній або двом цифрам після нього,
// роблячи цю частину необов'язковою.\ \s - відповідає пробілу.
// [a-zA-Z] - будь-яка літера англійської абетки, незалежно від регістру (велика або мала літера).
// {3} - рівно три рази, що вказує на кількість літер.
// \s - знову відповідає пробілу.
// in - відповідає тексту "in".
// \s- знову відповідає пробілу.
// [a-zA-Z] - будь-яка літера англійської абетки, незалежно від регістру (велика або мала літера).
// {3} - рівно три рази, що вказує на кількість літер.
// $ - кінець рядка.
//------------------------
//валидность-> строку.split(' ') в [] ->
// распоковать в [переменные]-> нов {}->запрос на API

const ExchangeForm = () => {
  const dispatch = useDispatch();
  //{
  //   to: 'UAH',
  //   from: 'USD',
  //   amount: 15
  // }
  const handleSubmit = e => {
    e.preventDefault();
    const request = e.target.elements.request.value.trim();
    const isValid = validPettern.test(request);
    if (!isValid) return;
    //строку сделать массивом(split(разделить пробелом)) - деструкторизовать- сделать объект
    console.log(request.split(' '));
    const [amount, from, , to] = request.split(' ');
    const requestObj = { to, from, amount };

    //отправка данных на сервер- запрос
    dispatch(getExchangeInfo(requestObj));
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Вводьте дані в форматі 15 USD in UAH</p>
        <button className={styles.button} type="submit">
          <RiExchangeDollarFill className={styles.icon} />
        </button>

        <input
          title="Request format 15 USD in UAH"
          className={styles.input}
          name="request"
          defaultValue="15 USD in UAH"
        />
      </form>
    </>
  );
};

export default ExchangeForm;
