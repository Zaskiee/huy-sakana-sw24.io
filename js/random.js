var intervalId = null;
var isRunning=false;

function generateNumber(){
    if(!isRunning) {
        //startloop
        intervalId=setInterval(() => {
            for (let i = 1; i<=5; i++){
            var random = Math.floor(Math.random()*100) + 1;
            document.getElementById("n"+i).innerHTML = random; 
            }
        }, 80);
        document.getElementById("btn").innerHTML="stop";
        isRunning = true
    } else {
        clearInterval(intervalId)
        document.getElementById("btn").innerHTML="start";
        isRunning = false
    }
    // var random = Math.floor(Math.random()*200) + 1;
    // document.getElementById("result").innerHTML = random;
}