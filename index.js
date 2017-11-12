// Write your code in this file!
function scuberGreetingForFeet(distance){
  if (distance <=400) {
    return 'This one is on me!'
  } else if ((distance > 2000) && (distance < 2500)) {
    return 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return "Ok, sounds good."
  }
}
//returns "Ok, sounds good." when the city is NYC'
//return "No go." if the destination city is not NYC',
