import React from 'react';
export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            id: 'btn'
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        // this.a();
        // this.handleClick();
    }
    // 类的方法默认是不会绑定 this 的。这并不是 React 的特殊行为；它是函数如何在 JavaScript 中运行的一部分。
    // 根据this规则，在此回调函数中this丢失了隐式绑定（严格模式）,所以采用默认绑定到undefined
    // 方法一：绑定 this.handleClick 并把它传入 onClick；方法二： 在回调函数中使用箭头函数(函数就不会被作为参数赋值从而丢失绑定，但每次渲染都要创建一个回调函数，可能影响性能）；方法三：使用属性初始化器语法
    // handleClick(){
    //     console.log('this is:', this);
    //     // this.setState(prevState => ({
    //     //     isToggleOn: !prevState.isToggleOn
    //     // }));
    // }
    handleClick(){ // 事件对象要放在最后
        console.log('this is:', this);
        // console.log('id:', id);
        // this.setState(prevState => ({
        //     isToggleOn: !prevState.isToggleOn
        // }));
    }
    a=()=>{
        console.log(this);
        b();
        function b(){
            console.log(this); // undefined
        }
    }
    render() {
        return (
            // <button onClick={this.handleClick.bind(this, this.state.id)}>
            <button onClick={(e) => this.handleClick(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
  
// 问题：
// 1.在didmount时调用class里的普通函数，其this为class
// 箭头函数里的普通函数的this也是undefined
// 2.事件绑定普通函数，其this为Undefined
// 3.事件绑定箭头函数，箭头函数里调用普通函数，其this为class

// 4.事件直接绑定函数，函数定义用箭头函数，this也是class