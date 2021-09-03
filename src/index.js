import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import newcomponent from './newcomponent';
import Header from './Header';
import Footer from './Footer'; 
import Contenedor from './Contenedor';
import ContPersonaje from './ContPersonaje';


ReactDOM.render(
  <Header/>,
  document.getElementById('header')
);
ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
);
ReactDOM.render(
  <Contenedor />,
  document.getElementById('root')
);

ReactDOM.render(
  <ContPersonaje />,
  document.getElementById('contpersonaje')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
