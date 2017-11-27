// Greeter.js
import React, {Component} from 'react';
import Toast from './toast/index.jsx';
import SassExercise from './sass-exercise/index.jsx';
import './Greeter.scss';

class Greeter extends Component{
  constructor(props) {
      super(props);
  }
  tips = () => {
      Toast.show('你好！', 1000);
  }
  render() {
    return (
      <div>
        <div className="root">
          {<div onClick={this.tips}>点我出现浮层</div>}
        </div>
        <SassExercise />
      </div>
    );
  }
}

export default Greeter;