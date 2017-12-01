
import React from 'react';
import  './style.scss';

class Search extends React.Component {
    // 定义属性
    // constructor(props){
    //     // this.state={

    //     // }
    // }
    // 定义方法
    componentDidMount(){
        // 用promise封装一个ajax对象
        const getJSON = function(url) {
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
          };
          
          getJSON("").then(function(json) {
            console.log('Contents: ' + json);
          }, function(error) {
            console.error('出错了', error);
          });
    }
    // 事件绑定的函数
    search= (e) => {
        console.log(this);
        console.log(e);
        console.log(e.currentTarget);
        console.log(e.target);
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">Logo</div>
                    <div className="slogan">This is a slogan</div>
                </div>
                <div className="main">
                    <div className="nav">
                        <div>Hotel</div>
                        <div>Flights</div>
                        <div>Trains</div>
                    </div>
                    <div className="search-box">
                        <div className="tab">
                            <div>Round Trip</div>
                            <div>One-way</div>
                        </div>
                        <div className="search-city">
                            <div className="dcity">
                                <div className="tip">From</div>
                                <div className="dcityinfo">
                                    <div className="info">Beijing</div>
                                    <div className="code">All airports</div>
                                </div>
                            </div>
                            <div className="acity">
                                <div className="tip">From</div>
                                <div className="acityinfo">
                                    <div className="info">Shanghai</div>
                                    <div className="code">All airports</div>
                                </div>
                            </div>
                        </div>
                        <div className="ddate">
                            <div className="tip">Depart</div>
                            <div className="info">Nov 28</div>
                        </div>
                        <div className="person">
                            <div>
                                <div className="tip">Passenger(Adults)</div>
                                <div className="info">- 1 +</div>
                            </div>
                            <div>
                                <div className="tip">Class</div>
                                <div className="info">Economy</div>
                            </div>
                        </div>
                        <div className="btn" onClick={this.search}>Search</div>
                    </div>
                    <div className="mybookings">My Bookings</div>
                </div>
            </div>
        );
    }
}
export default Search;
