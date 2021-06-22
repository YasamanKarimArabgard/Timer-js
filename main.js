let startBtn=document.getElementById("start");
let pauseBtn=document.getElementById("pause");
let resetBtn=document.getElementById("reset");
let timer=document.getElementById("timer");
let counterBox=document.getElementById("counter");
let hour = 0;
let minute = 0;
let second = 0;
let stopTime=true;

const timercycle = () => {
    if(stopTime == false){
        second=parseInt(second);
        minute=parseInt(minute);
        hour=parseInt(hour);

        second = second + 1;

        if(second==60){
            minute = minute + 1;
            second = 0;
        }
        if(minute==60){
            hour = hour + 1;
            minute = 0;
        }
        if( second<10 || second==0){
        second = "0" + second;
        }
        if( minute<10 || minute==0){
            minute= "0" + minute;
        }
        if( hour<10 || hour==0){
            hour = "0" + hour;
        }

        timer.innerHTML = hour + ':' + minute + ':' + second;

        setTimeout(timercycle(),1000);
    }
}

startBtn.addEventListener("click",()=>{
    if(stopTime==true){
       stopTime=false;
       timercycle();
    }
})

pauseBtn.addEventListener("click",()=>{
    if(stopTime == false){
        stopTime=true;
    }
})


resetBtn.addEventListener("click",()=>{
    timer.innerHTML="00:00:00";
    stopTime= true;
    hour = 0;
    minute = 0;
    second = 0;
})