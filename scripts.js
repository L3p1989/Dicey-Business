let table = $('body').prepend('<div></div>');

let genDie = $("body").prepend('<button>Generate Die</button>');

function diceRole(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

$('button:first').click(function() {
    $('div:first').append($('<div class="dice"><p>' + diceRole(1, 7) + '</p></div>'));
});