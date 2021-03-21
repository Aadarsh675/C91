player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2name;
function send(){
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    character1 = word.charAt(1);
    middlecharacter = Math.floor(word.length/2);
    character2 = word.charAt(middlecharacter);
    secondlast = word.length - 1;
    character3 = word.charAt(secondlast);
    replace1 = word.replace(character1, "_");
    replace2 = replace1.replace(character2, "_");
    replace3 = replace2.replace(character3, "_");
    question_word = "<h4 id='word_display'> Q. " + replace3 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}