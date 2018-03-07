import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const modalRoot = document.createElement('modal-root'); // 容纳整个弹出层，与app层平行

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el, // Modal的容器，可放多个Modal内容
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const modal = this.state.showModal ? (
      // Layer,将渲染到父元素app-root外与app-root平行的元素modal-root中，但在app中通过showModel控制Moal是否渲染。
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}
