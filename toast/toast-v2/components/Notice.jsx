
import React from 'react';
import '../style/index.scss';

class Notice extends React.Component {
    static propTypes = {
        duration: React.PropTypes.number, // Notice显示时间
        content: React.PropTypes.any, // Notice显示的内容
        onClose: React.PropTypes.func // 显示结束回调
    };
    static defaultProps = {
        duration: 1000
    };
    componentDidMount() {
        if (this.props.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.props.duration);
        }
    }
    componentWillUnmount() {
        // 当有意外关闭的时候 清掉定时器
        this.clearCloseTimer();
    }
    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    close() {
        this.clearCloseTimer();
        const _this = this;
        this.timer = setTimeout(() => {
            if (this.props.onClose) {
                this.props.onClose();
            }
            clearTimeout(_this.timer);
        }, 300);
    }
    render() {
        return (
            <div styleName="toast-container">
                <div styleName="toast">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Notice;
