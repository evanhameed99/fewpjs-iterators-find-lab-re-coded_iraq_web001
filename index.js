const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(arr) {
  let winOrLose = arr.find((obj) => {
    return obj.result === "W";
  });
  return !!winOrLose?winOrLose.year : undefined;
}
