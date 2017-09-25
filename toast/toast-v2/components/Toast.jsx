
import React from 'react';
import classNames from 'classnames';
import Notification from './Notification';
let newNotification;

// 获得一个Notification
const getNewNotification = () => {
    // 单例
    if (!newNotification) {
        newNotification = Notification.reWrite();
    }

    return newNotification;
};

// 完成对Notification的改变
const notice = (content,duration = 100) => {
    let notificationInstance = getNewNotification();

    notificationInstance.notice({
        duration,
        content:
            <div className={
                classNames(['zby-toast-box'])
            }>
                <div className="zby-toast-content">{content}</div>
            </div>
    });
};

export default {
    // 显示
    show(content, duration) {
        return notice(content,duration);
    },
    // 销毁
    hide() {
        if (newNotification) {
            newNotification.destroy();
            newNotification = null;
        }
    }
};
