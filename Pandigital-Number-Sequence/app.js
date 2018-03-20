window.onload = function() {
    var button = document.getElementById('submit');
    
    button.addEventListener('click', function() {
        var input = document.getElementById('input').value;
        var output = document.getElementById('output');
        if(input.length) {
            input.split("");
            for(var i = 0; i < 9; i++) {
               if(!input.includes(i) || input[0] == 0){
                    output.innerHTML = "The sequence " + input + " is not a Pandigital Sequence";
                    return false;
                } else {
                    continue;
                }
            }
            
            output.innerHTML = "The sequence " + input + " is a Pandigital Sequence";
        } else {
            output.innerHTML = "Please enter a number sequence.";
        }
    });
};