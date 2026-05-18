document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("root");
  const pills = rootElement.querySelectorAll("[data-pill]");

  // now lets build a map of each pills so we can programatically access them later
  const pillMap = {};
  pills.forEach((pill) => {
    const position = pill.getAttribute("data-pill");
    pillMap[position] = pill;
  });

  //now to write numbers, we need to know what pills need to be on for each number, so we can create a map of numbers to pills
  const numberToPillsMap = {
    0: [
      "h-top",
      "h-bottom",
      "v-top-left",
      "v-top-right",
      "v-bottom-left",
      "v-bottom-right",
    ],
    1: ["v-top-right", "v-bottom-right"],
    2: ["h-top", "h-middle", "h-bottom", "v-top-right", "v-bottom-left"],
    3: ["h-top", "h-middle", "h-bottom", "v-top-right", "v-bottom-right"],
    4: ["h-middle", "v-top-left", "v-top-right", "v-bottom-right"],
    5: ["h-top", "h-middle", "h-bottom", "v-top-left", "v-bottom-right"],
    6: [
      "h-top",
      "h-middle",
      "h-bottom",
      "v-top-left",
      "v-bottom-left",
      "v-bottom-right",
    ],
    7: ["h-top", "v-top-right", "v-bottom-right"],
    8: [
      "h-top",
      "h-middle",
      "h-bottom",
      "v-top-left",
      "v-top-right",
      "v-bottom-left",
      "v-bottom-right",
    ],
    9: [
      "h-top",
      "h-middle",
      "h-bottom",
      "v-top-left",
      "v-top-right",
      "v-bottom-right",
    ],
  };

  //now in a loop, we can turn on the pills for each number, and then turn them off again before moving to the next number
  // to turn on a pill, we just increase its opacity, and to turn it off, we decrease its opacity
  let currentNumber = 0;
  setInterval(() => {
    // turn on the pills for the current number
    const pillsToTurnOn = numberToPillsMap[currentNumber];
    pillsToTurnOn.forEach((pillPosition) => {
      const pill = pillMap[pillPosition];
      pill.style.opacity = 1; // turn on the pill
    });

    // after a short delay, turn off the pills before moving to the next number
    setTimeout(() => {
      pillsToTurnOn.forEach((pillPosition) => {
        const pill = pillMap[pillPosition];
        pill.style.opacity = 0.1; // turn off the pill
      });
      currentNumber = (currentNumber + 1) % 10; // move to the next number, looping back to 0 after 9
    }, 500); // keep the number displayed for 500 milliseconds before turning off the pills
  }, 1000); // change the number every 1 second
});
