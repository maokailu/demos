// Greeter.js
import styles from './Greeter.css';//导入
import React, {Component} from 'react';
// import Toast from './toast/';
class Greeter extends Component{
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  tips(){
      console.log('x');
  }
  render() {
    return (
      <div className={styles.root}>
        {<div onClick={this.tips}>Click Me!</div>}
      </div>
    );
  }
}

export default Greeter;