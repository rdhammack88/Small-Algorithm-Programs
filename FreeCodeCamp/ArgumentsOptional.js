
function addTogether() {
  var num = arguments[0];
  
  
//   for(var i = 0; i < arguments.length; i++) {
  for(var number in arguments) {
    if(!Number.isInteger(arguments[number])) {
      return undefined;
    }
  }
  
  if(arguments.length == 2) {
    return arguments[0] + arguments[1]; 
  }
  
  return function(n) {
    return Number.isInteger(n) ? num + n : undefined;
  };
  
  
  
//   return false;
}

addTogether(2)([1]);
