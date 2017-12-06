1.flex布局适用场景
    1）最适合平均分布占满于首末中的布局（justify-content:space-between+flex:1），
    2）其次justify-content:center用来水平居中（多个div之间不想要距离就要设置flex:0 0 ?vw）
    3）then如同骰子般相同元素中间有距离的布局此时骰子固定宽度（justify-content:space-between超出用wrap） ，
    4）而宽度不一样的百分比布局需要设置flex的大小（其中一个flex:1，其他flex:0 0 ？vw,加起来100vw）
    备注：
        *flex的space不可控；
        *符合flex使用flex,避免深层嵌套,深层元素使用方便的padding,margin
2.flex布局使用前提
    1)兼容
3.flex补充知识点
    1）flex布局使得元素随内容变化大小，使其中包含的元素都变成inline-block
    
链接：
    Flex 布局教程：语法篇
        http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
    Flex 布局教程：实例篇
        http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
