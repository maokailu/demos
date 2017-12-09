import React from 'react';
import "./pullView.scss";
import Icon from './Gou.png';
export default class PullView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            status: '',
            loadingShow: false,
            completed: false,
            unCompleted: false,
            pullArrow: false,
            pushArrow: false
        }
        
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchMoveHandler = this.touchMoveHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
        this.getJSON = this.getJSON.bind(this);
    }

    initY = 0; // 滑动开始时的坐标
    moveY = 0; // 滑动时的坐标
    Y = 0; // 滑动向量

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
    touchStartHandler(e){
        var obj = e.target.parentNode;
        if(obj.className === "box"){
            this.initY = e.targetTouches[0].pageY * 100 / document.documentElement.clientHeight;
        }
        
        this.setState({
            status: '下拉刷新',
            loadingShow: false,
            pullArrow: true,
            pushArrow: false,
            completed: false,
            unCompleted: false
        })
    }
    touchMoveHandler(e){
        var obj = e.target.parentNode;
        if(obj.className === "box"){
            this.moveY = e.targetTouches[0].pageY * 100 / document.documentElement.clientHeight;
            this.Y = this.moveY - this.initY;
            if(this.Y > 0 && this.Y < 10){
                obj.style.WebkitTransform = "translateY(" + (this.Y - 10) + "vh)";
                this.setState({
                    status: '下拉刷新',
                    pullArrow: true,
                    pushArrow: false
                })
            }else if (this.Y > 10) {
                obj.style.WebkitTransform = "translateY(" + 0 + "vh)";
                this.setState({
                    status: '释放刷新',
                    pushArrow: true,
                    pullArrow: false
                })
            }
        }
    }
    touchEndHandler= (e)=>{
        var obj = e.target.parentNode;
        if (obj.className == "box") {
            this.endY = (obj.style.WebkitTransform.replace(/translateY\(/g, "").replace(/vh\)/g, "")) * 1;
            if (this.state.status ==='释放刷新') {
                obj.style.WebkitTransform = "translateY(" + 0 + "vh)";
                this.setState({
                    status: '正在刷新',
                    loadingShow: true,
                    pushArrow: false
                })

                this.getJSON('http://freegeoip.net/json/?callback = handleResponse').then(json=> {
                    this.setState({
                        status: '刷新成功',
                        loadingShow: false,
                        completed: true
                    })
                }, error=> {
                    this.setState({
                        status: '刷新失败',
                        loadingShow: false,
                        completed: false,
                        unCompleted: true
                    })
                }).then(()=>{
                    // 应该还原 这个值放state里，与status同步
                    setTimeout(()=>{
                        obj.style.WebkitTransform = "translateY(" + -10 + "vh)";
                        this.endY = -10;
                }, 1000);
                    
                });

            } else {
                obj.style.WebkitTransform = "translateY(" + -10 + "vh)";
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
                         {
                            this.state.unCompleted && 
                                <div className="completed_icon">error</div>
                        }
                        {this.state.pullArrow &&
                            <i className="pullArrow"></i>
                        }
                        {this.state.pushArrow &&
                            <i className="pushArrow"></i>
                        }
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