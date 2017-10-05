// 先定义再调用的函数：用函数声明，但按顺序书写
function outputNumbers(){
    console.log(this.id);
}
!function(){
    var btns = document.getElementsByTagName("input"); // 模仿块级作用域，在该立即执行函数中定义的任何变量，在执行完后都将销毁 &&
    // 尽量不要使用全局变量最多一个，全局事件函数里默认有this,event了
    for(var i=0; i<btns.length; i++){     
        btns[i].onclick = outputNumbers;
    }
}();

// 确保DOM完整后执行函数
// 1、为Load事件添加几个方法：
// window.onload = function(){
//     prepareGallery();
// }
// 2、为Load事件添加多个方法时：把那些将在页面加载完毕时执行的函数创建为一个队列
function  addLoadEvent(func){
    var oldload = window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldload();
            func();
        }
    }
}
function show(){
    console.log("x");
}