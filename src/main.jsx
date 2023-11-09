import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
let persistor =persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
 
<Provider  store={store} >

<PersistGate    persistor={persistor}  >
<BrowserRouter>
  <App />
  </BrowserRouter>
</PersistGate>
</Provider>
 
)
