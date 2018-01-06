
import React from 'react';
import '../style/index.scss';

class Notice extends React.Component {
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
    setTimeout(() => {
      this.props.onClose();
    }, 0);
  }
  render() {
    return (
      <div className="container">
        <div className="toast">
          {this.props.content}
        </div>
      </div>
    );
  }
}
export default Notice;
