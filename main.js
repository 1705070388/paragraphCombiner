var combinedPara = para1 + para2;
function getPara1(){
    var para1=document.getElementById("inputBox_1" + "inputBox_2" + "inputBox_3" + "inputBox_4" + "inputBox_5" + "inputBox_6");
    document.getElementById("result").innerHTML=para1;
}

function getPara2(){
    var para2=document.getElementById("inputBox_7" + "inputBox_8" + "inputBox_9" + "inputBox_10" + "inputBox_11" + "inputBox_12");
    document.getElementById("result").innerHTML=combinedPara;
}