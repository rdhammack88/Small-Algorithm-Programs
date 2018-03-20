<?php
function wordCount() {
    $word_to_match = '/'.$_POST['match'].'/i';
    $string_to_lookup = $_POST['stringMatch'];
    $word_array = explode(" ", $string_to_lookup);
    $word_count = 0;

    foreach($word_array as $word) {
        if(preg_match($word_to_match, $word)) {
            $word_count++;
        }
    }
    return $word_count;
}

if(isset($_POST['search'])) {
    $word_count = wordCount();
};
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Word Counter</title>
    <style>
        body {
            font-size: 1.2em;
        }
        input {
            font-size: 1.3em;
            line-height: .8em;
            padding: 5px;
            width: 30%;
        }
        textarea {
            font-size: 1em;
            padding: 5px;
        }
        input::placeholder, textarea::placeholder {
            color: #ccc;
        }
        button {
            font-size: 1em;
            background: #fc3;
        }
        #stringSearch, #word, #count {
            color: #fc3;
            background: #000;
            text-align: center;
            padding: 5px;
        }
        #searchedContent {
            /*display: none;*/
        }
    </style>
</head>
<body>

    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
        <label>
            Word to search for: <br>
            <input type="text" id="match" name="match" placeholder="sample">
        </label>
        <br><br>
        <label for="stringMatch">String to match:</label>
        <br>
        <textarea name="stringMatch" id="stringMatch" rows="7" cols="30" placeholder="This sample text, holds the word 'sample' twice"></textarea>
        <br>
        <button type="submit" id="search" name="search">Search Phrase</button>
    </form>
    <br><br><br>

    <div id="searchedContent">
        <p id="searchedWord">The word &nbsp;<span id="word"><?php if(isset($_POST['match'])) { echo $_POST['match']; } else { echo "sample"; } ?></span>&nbsp; appears &nbsp;<span id="count"><?php if(isset($word_count)) { echo $word_count; } else { echo 2; } ?></span>&nbsp; times in the following message: </p>
        <p id="stringSearch"><?php if(isset($_POST['stringMatch'])) { echo $_POST['stringMatch']; } else { echo "This sample text, holds the word 'sample' twice"; } ?></p>
    </div>
    <script>alert("This code works on my local WAMP server, but not in the solo learn playground.");</script>
</body>
</html>


<!--
    this is a string and this string contains the word string 3 times
    THIS IS A STRING, AND THIS STRING CONTAINS THE WORD STRING 3 TIMES
-->