function scuberGreetingForFeet(ride){
  if (ride <= 199) {
    return 'This one is on me!'
  } else if (ride <= 2001) {
    return 'I will gladly take your thirty bucks.'
  } else if (ride >= 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(place){
  return ternaryCheckCity = place === "NYC"? 'Ok, sounds good.' : 'No go.'
  
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
    case 'not as generous':
    return 'Thank you.';
    default: 
    return 'Bye.';
  }
  
}