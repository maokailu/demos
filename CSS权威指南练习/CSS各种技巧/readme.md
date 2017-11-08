一.居中
https://www.cnblogs.com/2050/p/3392803.html 

	* 水平居中

        行内元素：text-align
        块状元素: 
            定宽   
                    1.margin:auto
                    2.
                    <div class="parent">
                        <div class="child">使用绝对定位来进行居中</div>
                    </div>
                    .parent{
                        position:relative;
                    }
                    .child{
                        width:100px;
                        position:absolute;
                        left:50%;
                        margin-left:-50px;/*该元素宽度的一半*/
                    }
            不定宽  1.放在table里或者设置display:inline-block，再设置text-align:center
                    2.
                    <div class="wrapper">
                        <div class="child">
                            使用浮动配合相对定位实现水平居中
                        </div>
                    </div>

                    .wrapper{
                        float:left;/*使之自适应内容宽度*/
                        position:relative;
                        left:50%;/*相对本身向右偏移父元素宽度的一半*/
                        clear:both;
                    }
                    .child{
                        position:relative;
                        left:-50%;/*相对本身向左偏移wrapper（等于本身宽度）一半的宽度*/
                    }

	* 垂直居中

          行内元素
                1.父元素高度确定的单行文本：line-height和height一样；
                2.父元素确定的多行文本：使用display： table -cell (包括tbody、tr、td)标签，同时设置 vertical-align：middle

          块状元素
                定宽
                    <div class="parent">
                        <div class="child">使用绝对定位来进行居中</div>
                    </div>
                    .parent{
                        position:relative;
                    }
                    .child{
                        width:100px;
                        position:absolute;
                        left:50%;
                        margin-left:-50px;/*该元素宽度的一半*/
                    }
                不定宽
                    <div class="wrapper">
                        <div class="child">
                            使用浮动配合相对定位实现水平居中
                        </div>
                    </div>

                    .wrapper{
                        float:left;/*使之自适应内容宽度*/
                        position:relative;
                        left:50%;/*相对本身向右偏移父元素宽度的一半*/
                        clear:both;
                    }
                    .child{
                        position:relative;
                        left:-50%;/*相对本身向左偏移wrapper（等于本身宽度）一半的宽度*/
                    }
    * 完全居中
        .box{
                display: flex;
                justify-content:center;
                align-items:center;
        }

        .box{
                display: flex;
            }
        .box div{margin: auto;}

二.CSS各种布局
https://www.zhihu.com/search?type=content&q=css%E5%B8%83%E5%B1%80

三.清除浮动的几种方法
https://www.zhihu.com/search?type=content&q=%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8

四.利用Border绘制三角形
http://www.jb51.net/article/42513.htm

五.BFC
http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html