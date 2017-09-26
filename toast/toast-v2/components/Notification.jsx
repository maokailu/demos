
import React from 'react';
import ReactDOM from 'react-dom';
import Notice from './Notice';

class Notification extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            notices: [] // 存储当前有的notices
        }
    }
    add (notice) {
        // 添加notice
        // 创造一个不重复的key
        const {notices} = this.state;
        const key = notice.key ? notice.key : notice.key = getUuid();
        const temp = notices.filter((item) => item.key === key).length;

        if(!temp){
            // 不存在重复的 添加
            notices.push(notice);
            this.setState({
                notices: notices
            });
        }
    }
    remove (key) {
        // 根据key删除对应
        this.setState(previousState => {
            return {
                notices: previousState.notices.filter(notice => notice.key !== key),
            };
        });
    }
    getNoticeDOM () {
        const _this = this;
        const {notices} = this.state;
        let result = [];

        notices.map((notice)=>{
            const closeCallback = () => {
                _this.remove(notice.key);
            };

            result.push(
                <Notice key={notice.key} {...notice} onClose={closeCallback} />
            );
        });

        return result;
    }
    render () {
        const noticesDOM = this.getNoticeDOM();

        return (
            <div>
                {noticesDOM}
            </div>
        )
    }
}

// 统计notice总数 防止重复
let noticeNumber = 0;

// 生成唯一的id
const getUuid = () => {
    return "notification-" + new Date().getTime() + "-" + noticeNumber++;
};

// 该方法方便Notification组件动态添加到页面中和重写
Notification.reWrite = function (properties) {
    const { ...props } = properties || {};

    let div;

    div = document.createElement('div');
    document.body.appendChild(div);

    const notification = ReactDOM.render(<Notification {...props} />, div);

    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },
        removeNotice(key) {
            notification.remove(key);
        },
        component: notification
    }
};

export default Notification;