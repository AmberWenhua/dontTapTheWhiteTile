/**
 * Created by Administrator on 2017/10/27.
 */

function getPosTop(i,j){
    return i*100;
}
function getPosLeft(i,j){
    return j*100;
}

//获取键盘事件
$(document).keydown(function (event) {
    switch (event.keyCode){
        case 74://j
            if (board[3][0]==1 && score==0){
                //第一次敲击键盘正确时
                //计数器开始计时
                timeRun();
                //将游戏开始的提示清除
                clearText();
                moveDown();
            } else if(board[3][0]==1 && score>0 && score <10){
                moveDown();
            }else{
                //如果敲击的键是错误的，游戏结束
                isGameOver();
            }
            break;
        case 75://k
            if (board[3][1]==1 && score==0){
                //第一次敲击键盘正确时
                //计数器开始计时
                timeRun();
                //将游戏开始的提示清除
                clearText();
                moveDown();
            } else if(board[3][1]==1 && score>0 && score <10){
                moveDown();
            }else{
                //如果敲击的键是错误的，游戏结束
                isGameOver();
            }
            break;
        case 76://l
            if (board[3][2]==1 && score==0){
                //第一次敲击键盘正确时
                //计数器开始计时
                timeRun();
                //将游戏开始的提示清除
                clearText();
                moveDown();
            } else if(board[3][2]==1 && score>0 && score <10){
                moveDown();
            }else{
                //如果敲击的键是错误的，游戏结束
                isGameOver();
            }
            break;
    }
});
//黑块向下移动
function moveDown(){
    for(var i=3;i>=0;i--){
        for(var j=2;j>=0;j--){
            if(board[i][j]==1){
                if(i == 3){
                    //将当前的黑块改变成普通样式
                    $("#block-"+i+"-"+j).css("background-color","#fff");
                    board[i][j]=0;
                }else{
                    $("#block-"+i+"-"+j).css("background-color","#fff");
                    board[i][j]=0;
                    //将当前的黑块的下一行同一列变成黑色
                    $("#block-"+(i+1)+"-"+j).css("background-color","#000");
                    board[i+1][j]=1;
                }
            }
        }
    }
    //第一行随机生成一个黑块
    var randX = parseInt(Math.floor(Math.random()*3));
    var block=$("#block-0"+"-"+randX);
    block.css("background-color","#000");
    board[0][randX]=1;
    score += 1;
}
//游戏提示清除
function clearText(){
    $("#block-3-0").text("");
    $("#block-3-1").text("");
    $("#block-3-2").text("");
}

//游戏时间
function timeRun(){
    timerun += 0.001;
    $("span").text(timerun.toString().substr(0,5));//取前五位
    t=setTimeout("timeRun()",1);
}
//游戏结束
function isGameOver(){
    //停止计时器
    clearTimeout(t);
    //此时敲击键盘无效
    score = -1;
    //只能生成一个gameover
    if(t1 == 0){
        //游戏结束提示
        $("#grid-container").append("<div id='gameover' class='gameover'><p>本次用时</p><span>"+timerun.toString().substr(0,5)+"秒</span>" +
            "<a href='javascript:restart();' id='restart'>Restart</a></div>");
        $("#gameover").css("background-color","rgba(0,0,0,0.5)");
        t1++;
    }

}

//重新开始游戏
function restart(){
    //去除游戏结束提示
    $("#gameover").remove();
    //计数器重新计时
    $("#time-box").html("<span>0.000</span>"+"秒");
    //将上一次游戏的黑块清除
    $(".block").remove();
    //将统计游戏键盘敲击次数归零
    score=0;
    t1=0;
    //重新初始化
    init();
}