// Greeter.js
import styles from './Greeter.css';//导入
import React, {Component} from 'react';
var config = require('./config.json');
class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter

  