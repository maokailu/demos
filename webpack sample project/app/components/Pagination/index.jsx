import React from 'react';
import PageItem from './PageItem.jsx';
export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        };
    }
    
    // this.setState = ({
        // current: pageNum
    // })
    render() {
        const pageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const pageLength = pageNums.length;
        return (
            <div className = "pagination">
                {
                    pageNums.map(pageNum => {
                        return <PageItem key={pageNum} current={this.state.current} pageNum = {pageNum} pageLength={pageLength}/>;
                    })
                }
            </div>
        );
    }
}
