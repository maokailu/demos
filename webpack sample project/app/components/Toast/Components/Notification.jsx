
// 管理多个Notice
import React from 'react';
import ReactDOM from 'react-dom';
import Notice from './Notice.jsx';
// 将多个Notice一起添加到页面中
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [] // 存储notices
    };
  }
  // 添加一个不重复的Notice
  add(notice) {
    const notices = this.state.notices;
    const key = notice.key ? notice.key : notice.key = getUuid();
    const temp = notices.filter(item => item.key === key).length;
    if (!temp) {
      notices.push(notice);
      this.setState({
        notices: notices
      });
    }
  }
  // 根据key删除对应Notice
  remove= key => {
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key)
      };
    });
  }
  getNoticeDOM = () => {
    const notices = this.state.notices;
    const result = [];
    notices.map(notice => {
      result.push(
        <Notice key={notice.key} {...notice} onClose={() => {this.remove(notice.key);}} />
      );
    });
    return result;
  }
  render() {
    const noticesDOM = this.getNoticeDOM();
    return (
      <div>
        {noticesDOM}
      </div>
    );
  }
}
// 生成唯一的id
let count = 0;
const getUuid = () => {
  return 'notification-' + new Date().getTime() + '-' + count++;
};
// 该方法方便Notification组件动态添加到页面中
Notification.reWrite = function(properties) {
  const { ...props } = properties || {};
  let div;
  div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<Notification {...props} />, div);
  return {
    addNotice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice(key) {
      notification.remove(key);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
    component: notification
  };
};
export default Notification;
