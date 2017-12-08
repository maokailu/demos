import React from 'react';
import "./pullView.scss";
import Icon from './Gou.png';
export default class PullView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            status: '释放刷新',
            loadingShow: false,
            completed: false,
            pullArrow: false,
            pushArrow: false
        }
        
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchMoveHandler = this.touchMoveHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
        this.getJSON = this.getJSON.bind(this);
    }

    initY = 0;
    moveY = 0;
    endY = -10;
    Y = 0;

    touchStartHandler(e){
        var obj = e.target.parentNode;
        if(obj.className === "box"){
            this.initY = e.targetTouches[0].pageY * 100 / document.documentElement.clientHeight;
        }
    }
    touchMoveHandler(e){
        if(this.endY === -10){
            var obj = e.target.parentNode;
            if(obj.className === "box"){
                this.moveY = e.targetTouches[0].pageY * 100 / document.documentElement.clientHeight;
                this.Y = this.moveY - this.initY;
                if (this.Y < 0) {
                    // 往上滑
                    obj.style.WebkitTransform = "translateY(" + -10 + "vh)";
                } else{
                    // 跟随手势下滑
                    obj.style.WebkitTransform = "translateY(" + (this.Y-10) + "vh)";
                    if (this.Y > 10) {
                        // 已完全滑出
                        obj.style.WebkitTransform = "translateY(" + 0 + "vh)";
                    }
                }
            }
        }else{
            var obj = e.target.parentNode;
            if(obj.className === "box"){
                this.moveY = e.targetTouches[0].pageY * 100 / document.documentElement.clientHeight;
                this.Y = this.moveY - this.initY;
                if (this.Y < 0) {
                    obj.style.WebkitTransform = "translateY(" + this.Y + "vh)";
                    if (this.Y < -10) {
                        // 已完全还原
                        obj.style.WebkitTransform = "translateY(" + -10 + "vh)";
                    }
                } else {
                    // 往下滑
                    obj.style.WebkitTransform = "translateY(" + 0 + "vh)";
                }
            }
        }
    }
    getJSON = url => {
        const promise = new Promise(function(resolve, reject){
            const handler = function() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        
        });
        return promise;
    }
    touchEndHandler= (e)=>{
        var obj = e.target.parentNode;
        if (obj.className == "box") {
            // 使其完全滑出和还原的分界点
            this.endY = (obj.style.WebkitTransform.replace(/translateY\(/g, "").replace(/vh\)/g, "")) * 1;
            if (this.endY > -5) {
                // 应该滑出
                obj.style.WebkitTransform = "translateY(" + 0 + "vh)";
                this.endY = 0;

                // 显示正在刷新
                this.setState({
                    status: '正在刷新',
                    loadingShow: true,
                    pullArrow: false
                })

                // 发请求
                this.getJSON('http://freegeoip.net/json/?callback = handleResponse').then(json=> {
                    // 请求成功
                    this.setState({
                        status: '刷新成功',
                        loadingShow: false,
                        completed: true,
                    })
                }, error=> {
                    console.error('出错了', error);
                }).then(()=>{
                    // 应该还原 这个值放state里，与status同步
                    setTimeout(()=>{
                        obj.style.WebkitTransform = "translateY(" + -10 + "vh)";
                        this.setState({
                            status: '释放刷新',       
                            completed: false,
                            pullArrow: true
                        })
                }, 1000);
                    
                });

            } else {
                // 应该还原
                obj.style.WebkitTransform = "translateY(" + -10 + "vh)";
                this.endY = -10;
                
                // 显示释放刷新
                this.setState({
                    status: '释放刷新'
                })
            }
        }
    }
    render(){
        return (
            <div className="wrapper">
                <div className="box" onTouchStart={(e) => this.touchStartHandler(e)} onTouchMove={(e) => this.touchMoveHandler(e)} onTouchEnd = {(e) => this.touchEndHandler(e)} >
                    <div className="header">
                        {
                            this.state.completed && 
                                <div className="completed_icon">OK</div>
                        }
                        {this.state.pullArrow &&
                            <i className="pullArrow"></i>
                        }
                        {/* {this.state.pushArrow &&
                            <i className="pushArrow"></i>
                        } */}
                        {this.state.loadingShow && 
                            <div className="sk-fading-circle">
                                <div className="sk-circle sk-circle1"></div>
                                <div className="sk-circle sk-circle2"></div>
                                <div className="sk-circle sk-circle3"></div>
                                <div className="sk-circle sk-circle4"></div>
                                <div className="sk-circle sk-circle5"></div>
                                <div className="sk-circle sk-circle6"></div>
                                <div className="sk-circle sk-circle7"></div>
                                <div className="sk-circle sk-circle8"></div>
                                <div className="sk-circle sk-circle9"></div>
                                <div className="sk-circle sk-circle10"></div>
                                <div className="sk-circle sk-circle11"></div>
                                <div className="sk-circle sk-circle12"></div>
                            </div>
                        }
                        {this.state.status}
                    </div>
                    <div className="main">
                        下拉出现刷新层
                    </div>
                </div>
            </div>
        );
    }
}