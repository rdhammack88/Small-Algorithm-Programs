// function steamrollArray(arr) {
//   // I'm a steamroller, baby

//   for(var i = 0; i < arr.length; i++) {
// //     console.log();
//     if(Array.isArray(arr[i])) {
// //       for(var j = 0; j < arr[i].length; j++) {
//         var type = typeof(arr[i]);
//         var typeCall = "to" + type.charAt(0).toUpperCase() + type.slice(1);
// //         arr[i] = arr[i] + '.to' + type + '()';
//         arr[i] = typeCall;
//       }
//     }
// //   }

//   return arr;
// //   return type;
// }


///////////////////

// function steamrollArray(arr) {
//   // I'm a steamroller, baby

//   var newArr = [];
  
//   arr.forEach(function(nestedArr, i) {
//     if(Array.isArray(nestedArr)) {
//     ///////PARTIALLY WORKS UNTIL THE RETURN 5 LINES DOWN///////
// //       let j = 0;
// //       newArr.push(nestedArr[j]);
// //       //arr.shift();
      
// //       return steamrollArray(nestedArr);
      
//       nestedArr.forEach(function(deeperNestedArr, j) {
//         if(Array.isArray(deeperNestedArr)) {
//           return steamrollArray(deeperNestedArr);
//         } else {
//           newArr.push(arr[i][j]);
//         }
//       });
      
// //       let j = 0;
// //       newArr.push(nestedArr[j]);
//     } else {
//       newArr.push(arr[i]); //nestedArr
//       //arr.shift();
//     }
//   });
  
//   return newArr;
  
//   //return arr;
// }

/////////////////////////
var newArr = [];
function steamrollArray(arr) {
//   var newArr = newArr || [];
  arr.forEach(function(nestedArr, i) {
    if(Array.isArray(nestedArr)) {
      return steamrollArray(nestedArr);
    } else {
      newArr.push(arr[i]);
    }
  });
  return newArr;
}

steamrollArray([[["a"]], [["b"]]])
//steamrollArray([1, [2], [3, [[4]]]]);







// function steamrollArray(arr) {
//   var newArr = [];
//   arr.forEach(function(nestedArr, i) {
//     if(Array.isArray(nestedArr)) {
//       nestedArr.forEach(function(deeperNestedArr, j) {
//         if(Array.isArray(deeperNestedArr)) {
//           return steamrollArray(deeperNestedArr);
//         } else {
//           newArr.push(arr[i][j]);
//         }
//       });
//     } else {
//       newArr.push(arr[i]);
//     }
//   });
//   return newArr;
// }



// function steamrollArray(arr) {
//   var newArr = [];
//   arr.forEach(function(nestedArr, i) {
// 	console.log(nestedArr);
//     if(Array.isArray(nestedArr)) {
//       console.log(nestedArr);
// console.log(nestedArr[i]);
// return steamrollArray(nestedArr);
//     } else {
// 		console.log(i);
//       newArr.push(arr[i]);
// 		console.log(i);
//     }
//   });
//   return newArr;
// }





////////////// WORKING CODE BELOW, COMPLETED TASK WITH BELOW CODE ///////////////
function steamrollArray(arr) {
  var newArr = [];
  
  function testForArray(arr) {
    arr.forEach(function(nestedArr, i) {
      if(Array.isArray(nestedArr)) {
        return testForArray(nestedArr);
      } else {
        newArr.push(arr[i]);
      }
    });
    return newArr;
  }
    return testForArray(arr);
}

steamrollArray([[["a"]], [["b"]]]);
// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([1, [], [3, [[4]]]]);
// steamrollArray([1, {}, [3, [[4]]]]);