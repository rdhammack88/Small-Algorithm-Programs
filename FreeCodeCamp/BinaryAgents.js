
function binaryAgent(str) {
  
  var arr = str.split(' ');
//   return arr;
  var string = '';
  var binString = '';
  
  for(var i = 0; i < arr.length; i++) {
//     binString += arr[i].charCodeAt();
    string += String.fromCharCode(parseInt(arr[i], 2));
  }
  
//   arr.forEach(function(bin, i) {
// //     var code = string.charCodeAt(string);
// //     return code;
    
//     binString += bin.charCodeAt(i);
//     string += String.fromCharCode(binString);
    
// //     for(var i = 0; i < bin.length; i++) {
// //       binString += bin.charCodeAt(i) + '//';
// //     }
    
// //     return string += bin.charCodeAt(i);
//     string = bin;
//   });
  
//   return binString;
//   return String.fromCharCode(string);
  return string;
//   return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




// function binaryAgent(str) {
  
//   var arr = str.split(' ');
//   var string = '';
// //   return arr;
  
//   for(let i = 0; i < arr.length; i++) {
    
//   }
  
//   arr.forEach(function(string) {
//     var code = string.charCodeAt(string);
//     string += code;
// //     return code;
//   });
  
//   return string;
// }
