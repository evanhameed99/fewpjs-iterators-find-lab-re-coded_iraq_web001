const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){

  let winOrLose = arr.find(obj =>{
    if ( obj.result ==='W'){
      return obj.year;
    }
  })
  return winOrLose ; 

}
