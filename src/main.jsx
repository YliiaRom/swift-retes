import React from 'react';
import ReactDOM from 'react-dom/client';

import 'modern-normalize/modern-normalize.css';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/stor';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

/* <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    > */

/* <App /> */

/* </BrowserRouter> */

/* </React.StrictMode>,
); */
// }
