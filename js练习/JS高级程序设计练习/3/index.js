//3.1 语法
//3.1.3 注释
    //js文件里的两种注释
    /*多行注释axiba没找到快捷键*/

//3.2 变量
var a="hi";
function test(){
    // var定义的变量成为该作用域的局部变量，函数退出后销毁
    var b="hi";
}

//3.4 数据类型 5种基本数据类型和1种复杂数据类型
//3.4.1 typeof操作符
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
//3.4.2 Undefined类型
var message;//var age
console.log("未初始化的变量message:"+message);// console.log(age);未声明的变量这里将产生错误
console.log("对未初始化和未声明的变量执行typeof都将输出undefined:"+"\nmessage:"+typeof(message)+"\nage:"+typeof(age));
//3.4.3 Null类型
console.log("null == undefined " + (null == undefined));
//3.4.4 Boolean类型
console.log("\nBoolean()转型函数:")
console.log("\"\" "+Boolean(""),"a "+Boolean("a"));
console.log("0 "+Boolean(0),"1 "+Boolean(1));
console.log("null "+Boolean(null),"{} "+Boolean({}));
console.log("undefined "+Boolean(undefined));
//3.4.5 Number类型
var octalNum1 = 070; // 八进制的56
var octalNum2 = 079; // 无效的八进制数值，解析为79
var octalNum3 = 08; // 无效的八进制数值，解析为8；

var hexNum1 = 0xA; // 十六进制的10;
var hexNum2 = 0x1f; // 十六进制的31
//3.4.7
var o = new Object();

//3.7
//3.7.1
function doAdd(num1, num2){
    if(arguments.length === 1){
        console.log(num1+10);
    }else if(arguments.length === 2){
        console.log(arguments[0]+num2);
    }
}
doAdd(1);
doAdd(1,2);
