//js文件里的两种注释
/*多行注释
axiba没找到快捷键*/

var a="hi";
function test(){
    // var定义的变量成为该作用域的局部变量，函数退出后销毁
    var b="hi";
}

// 数据类型 5种基本数据类型和1种复杂数据类型
//typeof操作符
var t1;
var t2 = true;
var t3 = "t3";
var t4 = 4;
var t51 = {};
var t52 = null;
var t6 = function(){};
console.log(
    "t1 = " + t1 + ",类型为 " + typeof(t1) +
    ";\nt2 = " + t2 + ",类型为 " + typeof(t2) +
    ";\nt3 = " + t3 + ",类型为 " + typeof(t3) +
    ";\nt4 = " + t4 + ",类型为 " + typeof(t4) +
    ";\nt5.1 = " + t51 + ",类型为 " + typeof(t51) + ";t5.2 = " + t52 + ",类型为 " + typeof(t52) +
    ";\nt6 = " + t6 + ",类型为 " + typeof(t6)
);

var message;
//var age
console.log("未初始化的变量message:"+message);
// console.log(age);未声明的变量这里将产生错误
console.log("对未初始化和未声明的变量执行typeof都将输出undefined:"+"\nmessage:"+typeof(message)+"\nage:"+typeof(age));

console.log("null == undefined " + (null == undefined));

console.log("\nBoolean()转型函数:")
console.log("\"\" "+Boolean(""),"a "+Boolean("a"));
console.log("0 "+Boolean(0),"1 "+Boolean(1));
console.log("null "+Boolean(null),"{} "+Boolean({}));
console.log("undefined "+Boolean(undefined));

