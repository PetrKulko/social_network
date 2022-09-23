import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/redux-store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <Provider store={store}>
      <React.StrictMode>
        {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
        <App />
      </React.StrictMode>
    </Provider>
  );
