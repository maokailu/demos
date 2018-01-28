import React from 'react';
import { render } from 'react-dom';
import PullView from './components/PullView';
// import Toast from './components/Toast';
import './components/Adaptation';
import './main.scss';

render(
  <PullView />,
  // <div className="btn" onClick ={()=>Toast.info()}>btn</div>,
  document.getElementById('root')
);
