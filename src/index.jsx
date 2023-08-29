import React from "react";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "overmind-react";
import { overmind } from "./overmind";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root') 
if (!domNode) throw new Error('Failed to find the root element');
const root = createRoot(domNode)
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider value={overmind}>
      <App />
    </Provider>
  </I18nextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
