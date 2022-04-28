$(document).ready(function () {
  var initCount,
    counterVal = 0,
    counting,
    screenOn,
    interval,
    startBtn = $("#StartBtn"),
    stopBtn = $("#StopBtn"),
    onOffBtn = $("#OnOffBtn"),
    modeSwitch = $("#ModeSwitch"),
    counter = $("#CounterText"),
    rotCircle = $("#RotatingCircle");

  onOffBtn.click(function (e) {
    e.preventDefault();
    OnOffSwitch();
  });

  startBtn.click(function (e) {
    var btnState = startBtn.attr("class");
    e.preventDefault();
    if (btnState === "Button") {
      Check();
      console.log("Checked!");
      counting == true;
      startBtn.toggleClass("Active");
      stopBtn.toggleClass("Active");
    }
  });

  stopBtn.click(function (e) {
    if (!stopBtn.hasClass("Active")) {
      startBtn.toggleClass("Active");
      stopBtn.toggleClass("Active");
      counter.css("color", "rgb(25, 25, 25)");
      clearInterval(interval);
      counting == false;
      initCount = counterVal;
      $("#RotatingCircle").toggleClass("ON");
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
    $("#CounterText img").css("display", "none");
    $(".Switchable").toggleClass("ON");
    modeSwitch.toggleClass("Active");
    onOffBtn.toggleClass("Active");

    if (rotCircle.hasClass("ON")) {
      rotCircle.toggleClass("ON");
    }
    if (
      startBtn.hasClass("Active") &&
      stopBtn.hasClass("Active") &&
      counting == false
    ) {
      startBtn.toggleClass("Active");
    } else if (!startBtn.hasClass("Active")) {
      startBtn.toggleClass("Active");
      stopBtn.toggleClass("Active");
    }

    if (!stopBtn.hasClass("Active")) {
      stopBtn.toggleClass("Active");
      counter.text(" ");
    }
  }

  function Check() {
    initCount = $("#InputNo").val();

    if (initCount > 0) {
      counter.text(initCount);
      counterVal = initCount;
      console.log("value assigned");
      interval = setInterval(StartCount, 1000);
      counter.css("color", "rgb(255, 30, 30)");
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
    if (counterVal > 0) {
      counting = true;
      counterVal--;
      counter.text(counterVal);
      console.log(counterVal);
    } else {
      console.log("counter value < 0");
      counting = false;
      clearInterval(interval);
      $("#RotatingCircle").toggleClass("ON");
      OnOffSwitch();
    }
  }
});
