$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var counter = 0;
    var numberOptions = [];
    function initializeGame() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $('.numberMatch').text(targetNumber);
        $('.calculate-score').text(counter);
        counter = 0;
        numberOptions = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numberOptions.push(number);
        }
    }
    function checkResult() {
        if (counter === targetNumber) {
            wins++;
            $('.win').text(wins);
            alert("Aferin Murad bey;)!");
            initializeGame();
        }
        else if (counter > targetNumber) {
            losses++;
            $('.lose').text(losses);
            alert("Fail!Yeniden cehd edin Murad bey;(");
            initializeGame();
        }
    }
    initializeGame();
    $('.crystal').on('click', function() {
        var crystalValue = numberOptions[$(this).index()];
        counter += crystalValue;
        $('.calculate-score').text(counter);
        checkResult();
    });
});