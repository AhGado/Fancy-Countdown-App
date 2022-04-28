$(document).ready(function () {
    var initCount,
        counterVal = 0,
        counting = false,
        screenOn = false,
        interval;


    $("#StartBtn").mousedown(function () {
        checkValues();

    });

    function checkValues() {
        clearInterval(interval);
        initCount = $("#InputNo").val();

        if (initCount > 0) {
            counterVal = initCount;
            $("#Screen").text(initCount);
            $("#StartBtn").toggleClass("unclickable");
            $("#Screen").addClass("ON");
            $("#Screen").removeClass("OFF");

            interval = setInterval(startCounting, 1000);
        }

    }

    function startCounting() {
        counting = true;
        counterVal--;
        console.log("Current Value: " + counterVal);
        $("#Screen").text(counterVal);
        if (counterVal <= 0) {
            $("#Screen").addClass("OFF");
            $("#Screen").removeClass("ON");
            stopCounting();
        }
    }

    function stopCounting() {
        counting = false;
        $("#StartBtn").toggleClass("Clickable");
        clearInterval(interval);
        console.log("Stopped");

    }

    function reset() {
        console.clear();
        counting = false;
        clearInterval(interval);
    }

    function toggleBtn() {
        if (counting === true) {
            $("#StartBtn").toggleClass("unclickable");
            $("#StartBtn").text(" Stop");
            console.log(counting, "can't count now");
        }
        if (counting === false) {
            $("#StartBtn").text("Start");
            console.log(counting, "wasn't counting, but now counts");
        }

    }

    function LightUp() {

    }
});

