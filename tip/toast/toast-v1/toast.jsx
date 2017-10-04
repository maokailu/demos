import React, { Component } from 'react';

export default class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || 'title',
            view: true
        };
    }
    componentDidMount() {
        if (t) {
            clearTimeout(t);
        } else {
            var t = setTimeout(() => {
                this.setState({
                    view: false
                });
            }, 1500);
            return t;
        }
    }
    render() {
        return (
            this.state.view &&
            <div id="toast-container">
                <div className="toast">{this.state.title}</div>
            </div>
        );
    }
}
