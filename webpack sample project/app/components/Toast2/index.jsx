
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
let div;
let defaultContent = 'This is a message';
let defaultDuration = 2000;
let Toast = {
  show(content, duration) {
    if (!this.closeTimer) {
      this.createDiv(content);
    } else {
      this.setContent(content);
      clearTimeout(this.closeTimer);
    }
    this.remove(duration);
  },
  remove(duration) {
    this.closeTimer = setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      this.closeTimer = null;
    }, duration || defaultDuration);
  },
  createDiv(content) {
    div = document.createElement('div');
    document.body.appendChild(div);
    this.setContent(content);
  },
  setContent(content) {
    ReactDOM.render(
      <div className="toast">{content || defaultContent}</div>,
      div
    );
  }
};
export default {
  show(content, duration) {
    Toast.show(content, duration);
  },
  close() {
    Toast.remove();
  }
};
