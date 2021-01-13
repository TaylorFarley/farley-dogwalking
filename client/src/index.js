import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <React.StrictMode>
      <GoogleReCaptchaProvider
    reCaptchaKey="6LchJioaAAAAADlyrXnpBEQZckXkhjS4kGz6rkuC"
    language="[optional_language]"
    useRecaptchaNet="[optional_boolean_value]"
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: "head", // optional, default to "head", can be "head" or "body",
      nonce: undefined // optional, default undefined
    }}
  >
    <App />
    </GoogleReCaptchaProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
