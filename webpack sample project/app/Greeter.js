import React from 'react';
import Search from './search/index.jsx';
import Tab from './search/tab/tab.jsx';
import './Greeter.scss';

class Greeter extends React.Component{
  constructor() {
      super();
      this.state={
      }
  }
  render() {
    return (
      <Tab />
    );
  }
}
export default Greeter;