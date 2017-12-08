import React from 'react';
import './Greeter.scss';
import PullView from "./components/PullView/pullView.jsx"

class Greeter extends React.Component{
  render() {
    return (
      <PullView />
    );
  }
}
export default Greeter;