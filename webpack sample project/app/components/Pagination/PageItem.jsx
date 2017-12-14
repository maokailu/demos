import React from 'react';
import './style.scss';
export default class PageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        };
        this.toggle = this.toggle.bind(this);
    }
    pageLength=this.props.pageLength;
    componentDidMount() {

    }
    toggle(pageNum) {
        console.log(pageNum);
        if ((pageNum >= 1 && pageNum <= 3) || ((pageNum >= this.pageLength - 2) && (pageNum <= this.pageLength))) {
            this.setState({
                status: 'status'
            });
        }
    }
    render() {
        const pageNum = this.props.pageNum;
        return (
            <div
                className = {this.props.current === pageNum ? 'pageItem' + ' ' + this.state.status : 'pageItem'}
                onClick={this.toggle.bind(this, pageNum)}
            >
                {this.props.pageNum}
            </div>);
    }
}
