import React from 'react';
import { render } from 'react-dom';
import './components/Adaptation';
// import './main.scss';
// import { App, appRoot } from './components/ToastPortals';
// import Game from './components/2048';
import App from './website/SearchNew';

render(
  // <App time="1000" text="hello this is a toast"/>, appRoot
  // <Game />, document.getElementById('root')
  <App />, document.getElementById('root')
);
