
1.背景宽度固定，使背景高度跟随元素内容变化（连续的字母被视为一个单词，宽度溢出父元素也不换行）
    .container{
        display:flex;
        background:#ddd;
        width:50vw;
        /* 垂直居中 */
        align-items: center;
        padding:20px 20px;
    }
    .text{
        display: block;
        /* 文本水平居中并换行 flex无法让其中文字换行 所以加一个中间层text*/
        text-align: center;
        overflow-wrap: break-word;
        width:50vw;/* 固定宽度高度随文本内容变化 不能用rem 文字超出后无效 */
    }
2.背景高度固定，使背景宽度跟随元素内容变化
    .container{
        width:-webkit-fit-content（min-content）
    }

