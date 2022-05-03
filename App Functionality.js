$(document).ready(function () {
  var initCount,
    counterVal = 0,
    counting = false,
    isPaused = false,
    screenOn = false,
    interval,
    lightMode = "Light",
    startBtn = $("#StartBtn"),
    stopBtn = $("#StopBtn"),
    onOffBtn = $("#OnOffBtn"),
    modeSwitch = $("#ModeSwitch"),
    counter = $("#CounterText"),
    rotCircle = $("#RotatingCircle"),
    offLogo = $("#offSign");

  // var screenH = $("Screen").css("height"),
  //     screenW = $("Screen").css("width");
  //     offLogo.css("display", "block");
  //     var logoH = toString(screenH / 2) + "px" ;
  //     var logoW = (screenW / 2) ;
  //     offLogo.css("top", toString(logoH + "px"));
  //     offLogo.css("left", toString(logoW + "px"));

  onOffBtn.click(function (e) {
    e.preventDefault();
    OnOffSwitch();
  });

  startBtn.click(function (e) {
    var btnState = startBtn.attr("class");
    e.preventDefault();
    if (btnState === "Button") {
      counter.css("color", "rgb(255, 30, 30)");
      if (isPaused && counting) {
        isPaused = false;
        counterVal = parseInt(counter.text());
        startBtn.toggleClass("Active");
        stopBtn.toggleClass("Active");
        console.log("Continuing Counting..");
      } else {
        counting == true;
        Check();
        startBtn.toggleClass("Active");
        stopBtn.toggleClass("Active");
        console.log("Checked!");
      }
    }
  });

  stopBtn.click(function (e) {
    if (!stopBtn.hasClass("Active")) {
      startBtn.toggleClass("Active");
      stopBtn.toggleClass("Active");
      counter.css("color", "rgb(25, 25, 25)");
      counting == false;
      isPaused = true;
      initCount = counterVal;
      $("#RotatingCircle").toggleClass("ON");
      console.log("Paused!");
    }
  });

  modeSwitch.click(function (e) {
    if (onOffBtn.hasClass("Active")) {
      console.log("Light Mode Changed!");
      $("#Screen").toggleClass("Dark");
    }
  });

  function OnOffSwitch() {
    clearInterval(interval);
    counting = false;
    isPaused = false;
    $("#CounterText img").css("display", "none");
    $(".Switchable").toggleClass("ON");
    modeSwitch.toggleClass("Active");
    onOffBtn.toggleClass("Active");
    counter.css("color", "rgb(25, 25, 25)");
    console.log("image rdy");
    console.log("Screen On!");

    if (
      startBtn.hasClass("Active") &&
      stopBtn.hasClass("Active") &&
      counting == false
    ) {
      startBtn.toggleClass("Active");
      offLogo.css("display", "none")

    } else if (!startBtn.hasClass("Active")) {
      startBtn.toggleClass("Active");
      stopBtn.toggleClass("Active");
    }

    if (!stopBtn.hasClass("Active")) {
      stopBtn.toggleClass("Active");
      counter.text(" ");
      counting = false;
      offLogo.css("display", "inline-block")
    }

    if (rotCircle.hasClass("ON")) {
      rotCircle.toggleClass("ON");
    }
  }

  function Check() {
    initCount = $("#InputNo").val();

    if (initCount > 0) {
      counter.text(initCount);
      counterVal = initCount;
      console.log("value assigned");
      interval = setInterval(StartCount, 1000);
      $("#RotatingCircle").toggleClass("ON");
    } else {
      initCount = 10;
      counter.text(initCount);
      counterVal = initCount;
      interval = setInterval(StartCount, 1000);
      rotCircle.toggleClass("ON");
    }
  }

  function StartCount() {
    console.log(isPaused);

    if (counterVal > 0) {
      if (!isPaused) {
        counting = true;
        counterVal--;
        counter.text(counterVal);
        console.log(counterVal);
      }
    } else {
      console.log("Value < 0, or invalid");
      counting = false;
      clearInterval(interval);
      $("#RotatingCircle").toggleClass("ON");
      OnOffSwitch();
    }
  }
});
