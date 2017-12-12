
// 把那些将在页面加载完毕时执行的函数创建为一个队列？
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

// insertAfter
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild === targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibing);
    }
}

// 创建p元素和Img元素
function preparePlaceHolder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}// 用createElement、createTextNode替代innerHTML(不可进行后续操作、专利但更快)创建节点,用appendChild、insertBefore、insertAfter插入到DOM结构中

// 给每个导航绑定点击事件以显示相应图片
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(let i = 0;i<links.length;i++){
        // 事件绑定匿名函数（后续不用所以匿名）
        links[i].onclick = function (){
            showPic(this);
            return false;
        }
    }
}

// 点击导航显示相应图片
function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description"); 
    // nodeValue 文本节点的值 childNodes所有子节点 firstChild
    description.firstChild.nodeValue = text;
}

// //确保DOM完整后执行函数
// window.onload = function(){
//     // 可容纳几个函数
//     prepareGallery();
// }
// 把将在页面加载完毕时执行的函数添加进队列
addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);