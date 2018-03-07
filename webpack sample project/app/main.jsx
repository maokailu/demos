import React from 'react';
import { render } from 'react-dom';
import './components/Adaptation';
import './main.scss';
import Layer from './components/Layer';
render(
  <Layer />,
  // <div onClick={()=>Toast.info()}>ffddsdds</div>,
  // document.getElementById('root')
  document.getElementById('app-root')
);
