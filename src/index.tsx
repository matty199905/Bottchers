
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './Styles/GlobalStyles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Redux/store';



ReactDOM.createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

reportWebVitals();