
function truthCheck(collection, pre) {
  // Is everyone being true?
  
  for(var obj in collection) {
    if(collection[obj].hasOwnProperty(pre) &&  !Boolean(collection[obj][pre]) || collection[obj][pre] === undefined) {
      return false;
    }
  }  
  return true;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// truthCheck([{"single": ""}, {"single": "double"}], "single");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
