import React from 'react';
import { render } from 'react-dom';
import './components/Adaptation';
import './main.scss';
import Toast from './components/Toast';
render(
  // <Home />,
  <div onClick={()=>Toast.info()}>ffddsdds</div>,
  document.getElementById('root')
);
