import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome'
// import App from './App';
import reportWebVitals from './reportWebVitals';

// enable hot reload
if (module.hot) {
  module.hot.accept();
}

const element =
  <div>
    <Welcome name="Jared" />
    <Welcome name="Molly" />
    <Welcome name="Bun" />
  </div>


ReactDOM.render(element, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
