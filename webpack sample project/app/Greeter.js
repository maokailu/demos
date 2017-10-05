// Greeter.js
import styles from './Greeter.css';//导入
import React, {Component} from 'react';
import Toast from './toast/index.jsx';
class Greeter extends Component{
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  tips=()=>{
      Toast.show('你好！', 1000);
  }
  render() {
    return (
      <div className={styles.root}>
        {<div onClick={this.tips}>点我出现浮层</div>}
      </div>
    );
  }
}

export default Greeter;