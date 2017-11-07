/**
 * Created by Administrator on 2017/10/26.
 */
//board表示12个黑块：值为0表示为白块，否则为黑块
var board = new Array();
var timerun = 0.000;
var score=0;
var t;
var t1=0;

$(function () {
    //游戏的初始化
    init();
});


//网格布局初始化
function init(){
    for (var i=0;i<4;i++){
        board[i]=new Array();
        for(var j=0;j<3;j++){
            //12个白块的初始化
            var grid=$("#grid-"+i+"-"+j);
            grid.css("top",getPosTop(i,j));
            grid.css("left",getPosLeft(i,j));
            //12个黑块的初始化
            $("#grid-container").append("<div class='block' id='block-"+i+"-"+j+"'></div>");
            var block=$("#block-"+i+"-"+j);
            block.css("top",getPosTop(i,j));
            block.css("left",getPosLeft(i,j));
            //将12个黑块的值为0
            board[i][j]=0;

        }
    }
    generateOneBlock();
}
//每一行随机生成一个黑块
function generateOneBlock(){
    for(var i=0;i<4;i++){
        //生成随机的列
        var randX = parseInt(Math.floor(Math.random()*3));
        //上一块的位置也是黑块时，重新生成随机列
        if(i>0 && board[i-1][randX]== 1){
            randX = parseInt(Math.floor(Math.random()*3));
        }
        //获取随机生成的黑块的位置
        var block=$("#block-"+i+"-"+randX);
        block.css("background-color","#000");
        board[i][randX]=1;

    }
    point();
}
//初始化内容提示
function point(){
    $("#block-3-0").text("按J开始");
    $("#block-3-1").text("按K开始");
    $("#block-3-2").text("按L开始");
}
