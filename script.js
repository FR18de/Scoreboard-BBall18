document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.querySelector(".time");
    const periodDisplay = document.querySelector(".current-period");
    let totalTimeInSeconds = 600; // 10 minutes in seconds
    let timerInterval;
    let homeScore = 0;
    let awayScore = 0;
    let currentPeriod = 1;

    function updateScorebug() {
        document.querySelector(".score-home").textContent = homeScore;
        document.querySelector(".score-away").textContent = awayScore;
    }

    function updateTimerDisplay(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
       timerInterval = setInterval(function () {
           if (totalTimeInSeconds <=0) {
               clearInterval(timerInterval);
           } else {
            totalTimeInSeconds--;
            updateTimerDisplay(totalTimeInSeconds);
           }
       }, 1000);
    }

    function updatePeriodDisplay() {
        if (currentPeriod > 4) {
            periodDisplay.textContent = "OT"+ (currentPeriod-4);
        } else {
            periodDisplay.textContent = "Q" + currentPeriod;
        }
        document.querySelector(".curent-period").textContent = periodDisplay;        
    };

    function stopTimer() {
        clearInterval(timerInterval);
    };

    function scoreOneHome(){
        homeScore++;
        updateScorebug();
    };

    function scoreTwoHome(){
        homeScore +=2;
        updateScorebug();
    };

    function scoreThreeHome(){
        homeScore +=3;
        updateScorebug();
    };

    function minusHome(){
        homeScore--;
        updateScorebug();
    };


    function scoreOneAway(){
        awayScore++;
        updateScorebug();
    };

    function scoreTwoAway(){
        awayScore +=2;
        updateScorebug();
    };

    function scoreThreeAway(){
        awayScore +=3;
        updateScorebug();
    };

    function minusAway(){
        awayScore--;
        updateScorebug();
    };

    function period1(){
        currentPeriod = 1;
        totalTimeInSeconds = 600;
        updatePeriodDisplay();
        updateTimerDisplay(totalTimeInSeconds);
    };

    function period2(){
        currentPeriod = 2;
        totalTimeInSeconds = 600;
        updatePeriodDisplay();
        updateTimerDisplay(totalTimeInSeconds);
    };

    function period3(){
        currentPeriod = 3;
        totalTimeInSeconds = 600;
        updatePeriodDisplay();
        updateTimerDisplay(totalTimeInSeconds);
    };

    function period4(){
        currentPeriod = 4;
        totalTimeInSeconds = 600;
        updatePeriodDisplay();
        updateTimerDisplay(totalTimeInSeconds);
    };

    function periodOvertime(){
        currentPeriod++;
        totalTimeInSeconds = 300;
        updatePeriodDisplay();
        updateTimerDisplay(totalTimeInSeconds);
    };

    document.getElementById("startTime").addEventListener("click", startTimer);
    document.getElementById("stopTime").addEventListener("click", stopTimer);

    document.getElementById("homePlusOne").addEventListener("click", scoreOneHome);
    document.getElementById("homePlusTwo").addEventListener("click", scoreTwoHome);
    document.getElementById("homePlusThree").addEventListener("click",scoreThreeHome);
    document.getElementById("homeMinus").addEventListener("click", minusHome);

    document.getElementById("awayPlusOne").addEventListener("click", scoreOneAway);
    document.getElementById("awayPlusTwo").addEventListener("click", scoreTwoAway);
    document.getElementById("awayPlusThree").addEventListener("click", scoreThreeAway);
    document.getElementById("awayMinus").addEventListener("click", minusAway);

    document.getElementById("period1").addEventListener("click", period1);
    document.getElementById("period2").addEventListener("click", period2);
    document.getElementById("period3").addEventListener("click", period3);
    document.getElementById("period4").addEventListener("click", period4);
    document.getElementById("overtime").addEventListener("click", periodOvertime);


    
});