var intervalId = null;
var isRunning=false;
let random;
let all = [10, 20, 30, 40, 50];
var highest_num = 100

function generateNumber(){
    if(!isRunning) {
        //startloop
        intervalId=setInterval(() => {
            for (let i = 1; i<=5; i++){
                random = Math.floor(Math.random()*highest_num) + 1;
                while (all.includes(random)){
                    random = Math.floor(Math.random()*highest_num) + 1;
                }
                document.getElementById("n"+i).innerHTML = random; 
                all[i-1] = random;
            }
        }, 3);
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