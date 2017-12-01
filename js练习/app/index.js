// 给我一个电脑，我就能创造一个奇妙的世界

// JSONP
function handleResponse(response){
    console.log(response);
}
var script = document.createElement("script");
script.src="http://freegeoip.net/json/?callback=handleResponse";
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