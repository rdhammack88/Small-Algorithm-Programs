window.onload = function(){

    ////// *****    TEST CODE   ***** //////
    // var results = parseInt("22")
    // console.log(results);
    // var newResult = results.toString(16);
    // console.log(newResult);
    var arr = "33,22,44";
    console.log(arr);
    arr = arr.split(',');
    console.log(arr);
    arr = arr.join();
    console.log(arr);

    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var colorInp = document.getElementById("color").value;
        var hexSet = [];
        var badHexInput = /[^abcdef0-9]/i;
        var badRGBInput = /[A-z]/;
        var hexInput = /[A-Fa-f0-9]/i;
        var rgbInput = /[0-9,]/;
        
        /////*****   TEST CODE HERE  *****/////
        
        // If user inputs INCORRECT Values
        if(badHexInput.test(colorInp) || (badRGBInput.test(colorInp) && rgbInput.test(colorInp))) {
            // document.getElementById('error').innerHTML = 'Please input a valid color, either in Hexadecimal format or RGB format.';
        } else {
            document.getElementById('error').innerHTML = '';
        }
        
        // If user inputs RGB Values
        if(rgbInput.test(colorInp) && !badRGBInput.test(colorInp)) {
            var rgbSet = colorInp.split(",");
            for(var i = 0; i < rgbSet.length; i++) {
                var hexPair = parseInt(rgbSet[i]);
                rgbPair = hexPair.toString(16);
                hexSet.push(rgbPair);
            }
            document.getElementById('rgb').innerHTML = colorInp;
            document.getElementById('hex').innerHTML = hexSet.join();
        }
        
        // If user inputs HEXADECIMAL Values
        if(colorInp.length === 6 && hexInput.test(colorInp) && !badHexInput.test(colorInp)) {
            for(var i = 0; i < colorInp.length; i+=2) {
                var rgbPair = colorInp[i] + colorInp[i+1];
                hexPair = parseInt(rgbPair, 16);
                hexSet.push(hexPair);
            }
            document.getElementById('rgb').innerHTML = hexSet.join();
            document.getElementById('hex').innerHTML = colorInp;
        } else if(colorInp.length === 3 && hexInput.test(colorInp) && !badHexInput.test(colorInp)) {
            for(var i = 0; i < colorInp.length; i++) {
                var rgbPair = colorInp[i] + colorInp[i];
                hexPair = parseInt(rgbPair, 16);
                hexSet.push(hexPair);
            }
            document.getElementById('rgb').innerHTML = hexSet.join();
            document.getElementById('hex').innerHTML = colorInp;
        }
    });
}


// TEST
// BAD -  fasczf
// GOOD -  fa33dd

////// *****    TEST CODE   ***** //////

// var result = colorInp.match(match)
// console.log(badInput.test(colorInp));
// console.log(goodInput.test(colorInp));
// console.log(result);
// console.log(colorInp.length);


// var result = colorInp.split(",");
// console.log(result);

// document.getElementById('hex').innerHTML = result.join();
// return;


///// OBJECT CREATION /////
    
// var strConvert = {

//     numConvert: function(num) {
//         return num.toString(16);
//     },
//     strConvert: function(str) {czf
//         return parseInt(str, 16);
//     }
// }

// var numManipulation = strConvert.numConvert(15);
// console.log(numManipulation);

// var strManipulation = strConvert.strConvert("ff");
// console.log(strManipulation);

// var num = parseInt("1f", 16);
// var str = num.toString(16);
// var num1 = 155;
// var str1 = num1.toString(16);
// console.log(num);
// console.log(str);
// console.log(num1);
// console.log(str1);