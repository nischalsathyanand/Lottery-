var lotNum=[11111111,22222222,33333333,44444444,55555555,66666666,77777777,88888888,99999999];
var scrn=document.getElementById("screen");

function selectWinner()
{
    var pick=Math.floor(Math.random()*lotNum.length);
    var result=(lotNum[pick]);
    scrn.value=result;
    console.log(result);
    document.getElementById("winner").innerHTML=result;
}
function reset()
{
    scrn.value="000000";
}
