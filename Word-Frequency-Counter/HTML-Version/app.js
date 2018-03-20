function wordCounter() {
    var word = document.getElementById('match').value;
    var str = document.getElementById('stringMatch').value;
    var arr = str.split(' ');
    var wordCount = 0;
    var wordCheck = new RegExp(word, 'i');

    document.getElementById('searchedContent').style.display = 'block';
    document.querySelector('#word').innerHTML = word.toUpperCase();
    // document.querySelector('#stringSearch').innerHTML = str.toUpperCase();

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].match(wordCheck)) {
            wordCount++;
            document.querySelector('#stringSearch').innerHTML += "<span style='background:white; color:blue;'>" + (arr[i].toUpperCase() + "</span> ");
            continue;
        }
        document.querySelector('#stringSearch').innerHTML += (arr[i] + " ");
    }
    document.querySelector('#count').innerHTML = wordCount;
}

window.onload = function() {
    document.getElementById('search').addEventListener('click', wordCounter);

}
