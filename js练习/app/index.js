
(function(){
    // 事件
    var btn = document.getElementById("btn");
    // // DOM0
    // btn.onclick = function(){
    //     console.log("btn");
    // }
    // // DOM2
    // btn.addEventListener("click", function(){
    //     console.log("btn");
    // }, false)
    // // IE
    // btn.attachEvent("click", function(){
    //     console.log("btn");
    // })
        // 跨浏览器的事件处理程序
    var EventUtil = {
        addHandler: function(element, type, handler){
            if(element.addEventListener){
                element.addEventListener(type, handler, false);
            }else if(element.attachEvent){
                element.attachEvent("on"+type, handler)
            }else{
                element["on"+type] = handler;
            }
        },
        removeHandler: function(element, type, handler){
            if(element.removeEventListener){
                element.removeEventListener(type, handler, false);
            }else if(element.detachEvent){
                element.detachEvent("on"+type, handler)
            }else{
                element["on"+type] = null;
            }
        },
        getEvent: function(event){
            return event ? event : window.event;
        },
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        preventDefault: function(event){
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue = false;
            }
        },
        stopPropagation: function(event){
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
        }
    }
        // 使用EventUtil
    var handler = function(e){
        var event = EventUtil.getEvent();
        EventUtil.preventDefault(event);
        EventUtil.stopPropagation(event);
        console.log(e);
        console.log(e.currentTarget);
        console.log(e.target);
        console.log(this);
    }
    EventUtil.addHandler(btn, "click", handler);
    // EventUtil.removeHandler(btn, "click", handler);

    // 闭包
    function wait(){
        // setTimeout(function time(){
        //     console.log(message);
        // }, 1000)
        var me = "me";
        function time(){
            console.log(me);
        }
        time();
        return time;
    }
    var baz = wait();
    baz();

    // JSONP
    function handleResponse(response){
        console.log(response);
    }
    var script = document.createElement("script");
    // script.src="http://freegeoip.net/json/?callback=handleResponse";
    document.body.insertBefore(script, document.body.firstChild);

    // comet用xhr实现流
    function createStreamingClient(url, progress, finished){
        var xhr = new XMLHttpRequest(),
            received = 0;
        xhr.open("get", url, true);
        xhr.onreadystatechange = function(){
            var result;
            if(xhr.readyState = 3){
                // 只取得最新数据并调整计数器
                result = xhr.responseText.substring(received);
                received+=result.length;
                // 调用progress回调函数
                progress(result);
            }else if(xhr.readyState == 4){
                finished(xhr.responseText);
            }
        }
        xhr.send(null);
        return xhr;
    }

})()