
// 生成Notification单例并提供销毁方法
import Notification from './Notification';
let newNotification;
const getNewNotification = () => {
    // 单例 保持页面始终只有一个Notification
    if (!newNotification) {
        newNotification = Notification.reWrite();
    }
    return newNotification;
};
// 调用Notification的方法添加Notice
const addNotice = (content, duration) => {
    const notification = getNewNotification();
    notification.addNotice({
        duration,
        content
    });
};
export default {
    // 显示
    show(content, duration) {
        return addNotice(content, duration);
    },
    // 销毁
    hide() {
        if (newNotification) {
            newNotification.destroy();
            newNotification = null;
        }
    }
};
