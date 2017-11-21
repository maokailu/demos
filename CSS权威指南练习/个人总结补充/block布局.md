一.垂直布局
1.上半部分固定高度，下半部分自适应
    1).flex
        DOM文档:
            <main>
                <header>头部</header>
                <div class="main">主体部分</div>
            </body>
        CSS清单:
            body{
                display:flex;
                flex-flow:column;
                min-height:100vh;
            }
            .main{
                flex:1;
            }
    2).绝对定位
    3)calc
二.水平布局
1.左右部分定宽，中间部分自适应
    1).float+margin
        DOM文档:
            <div id="content">
                <div class="sub">sub</div>
                <div class="extra">extra</div>
                <div class="main">main</div>
            </div>
        CSS清单:
            .sub{
                width: 100px;
                float: left;
            }
            .extra{
                width: 200px;
                float: right;
            }
            .main{
                margin-left: 100px; 
                margin-right: 200px;
            }
        备注：
            *注意DOM文档的书写顺序，先写两侧栏，再写主面板，更换后则侧栏会被挤到下一列（圣杯布局和双飞翼布局都会用到）。　
            *这种布局方式比较简单明了，但缺点是渲染时先渲染了侧边栏，而不是比较重要的主面板。

    2).position+margin
        DOM文档:
            <div class="sub">left</div>
            <div class="main">main</div>
            <div class="extra">right</div>
        CSS清单:
            .sub, .extra {
                position: absolute;
                top: 0; 
                width: 200px;
            }
            .sub { 
                left: 0;
            }
            .extra { 
                right: 0; 
            }
            .main { 
                margin: 0 200px;
            }
        备注：
            *本方法不限制DOM书写顺序，先写主面板会使主面板部分优先渲染（一般主面板会比侧栏内容重要）。
            *与上一种方法相比，本种方法是通过定位来实现侧栏的位置固定。
            *如果中间栏含有最小宽度限制，或是含有宽度的内部元素，则浏览器窗口小到一定程度，主面板与侧栏会发生重叠。
    3).圣杯布局(float + 负margin)
        DOM文档:
            <div id="bd">         
                <div class="main"></div>        
                <div class="sub"></div>        
                <div class="extra"></div>  
            </div>
        CSS清单:
            .main {        
                float: left;       
                width: 100%;   
            }  
            .sub {       
                float: left;        
                width: 190px;        
                margin-left: -100%;               
                position: relative;  
                left: -190px;  
            }   
            .extra {        
                float: left;        
                width: 230px;        
                margin-left: -230px; 
                position: relative; 
                right: -230px;  
            }
            #bd {        
                padding: 0 230px 0 190px;   
            }
        备注：
            *DOM元素的书写顺序不得更改。
            *主面板部分优先渲染（一般主面板会比侧栏内容重要）。
            *当面板的main内容部分比两边的子面板宽度小的时候，布局就会乱掉。可以通过设置main的min-width属性或使用双飞翼布局避免问题。
    4)双飞翼布局(float + 负margin )
        DOM文档:
            <div class="main-wrap">
                <div class="main">#main</div>
            </div>
            <div class="sub"></div>        
            <div class="extra"></div>
        CSS清单:
            .main-wrap {        
                float: left;       
                width: 100%;   
            }  
            .sub {       
                float: left;        
                width: 190px;        
                margin-left: -100%;   
            }   
            .extra {        
                float: left;        
                width: 230px;        
                margin-left: -230px; 
            }
            .main {    
                margin: 0 230px 0 190px;
            }
        备注：
            *主面板部分优先渲染（一般主面板会比侧栏内容重要）。
            *圣杯采用的是padding，而双飞翼采用的margin，解决了圣杯布局main的最小宽度不能小于左侧栏的缺点。
            *双飞翼布局不用设置相对布局，以及对应的left和right值。
            *通过引入相对布局，可以实现三栏布局的各种组合，例如对右侧栏设置position: relative; left: 190px;,可以实现sub+extra+main的布局。

            
https://www.zhihu.com/search?type=content&q=css%E5%B8%83%E5%B1%80