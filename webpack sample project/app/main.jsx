import React from 'react';
import { render } from 'react-dom';
// import './components/Adaptation';
import './main.scss';
import { App, appRoot } from './components/ToastPortals';

render(
  <App time="1000" text="hello this is a toast"/>, appRoot
);
