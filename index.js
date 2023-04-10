function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return ("This one is on me!");
  }
  else if (someValue <= 2000){
    return ("That will be twenty bucks.");
  }
  else if (someValue <= 2500) {
    return ("I will gladly take your thirty bucks.")
  }
  else if (someValue >= 2500) {
    return ("No can do.")
  }
  }

function ternaryCheckCity(someCity){
  return someCity === 'NYC' ? "Ok, sounds good." : "No go."
}

const tip = 'tipValue';

function switchOnCharmFromTip(tip){
switch (tip) {
  case "generous":
      return ("Thank you so much.");
      break;
  case "not as generous":
      return ("Thank you.")
      break;
default: 
  return("Bye.");
}
}