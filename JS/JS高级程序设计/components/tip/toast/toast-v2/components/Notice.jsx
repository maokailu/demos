
import React from 'react';
import '../style/index.scss';

class Notice extends React.Component {
    static propTypes = {
        duration: React.PropTypes.number, // Notice显示时间
        content: React.PropTypes.any // Notice显示的内容
    };
    componentDidMount() {
        if (this.props.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.props.duration);
        }
    }
    componentWillUnmount() {
        this.clearCloseTimer();
    }
    clearCloseTimer= () => {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    close= () => {
        // 指定时间后，一个一个一下全部删除
        setTimeout(() => {
            this.props.onClose();
        }, 0);
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
