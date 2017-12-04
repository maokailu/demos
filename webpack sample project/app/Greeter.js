// Greeter.js
// import Toast from './toast/index.jsx';
// import Js from './js/api.jsx';
// import Search from './search/index.jsx';
// import List from './list/index.jsx';
// import Clock from './react/clock.jsx';
import ActionLink from './react/actionLink.jsx';
// import './Greeter.scss';

class Greeter extends Component{
  constructor() {
      super();
  }
  // tips = () => {
  //     Toast.show('你好！', 1000);
  // }
  render() {
    return (
      <div>
        {/* <div className="root">
          {<div onClick={this.tips}>点我出现浮层</div>}
        </div> */}
        {/* <Search /> */}
        {/* <List /> */}
        {/* <Js /> */}
        {/* <Clock />
        <Clock />
        <Clock /> */}

        <ActionLink />
      </div>
    );
  }
}
export default Greeter;