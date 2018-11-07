class Die {
    constructor() {
        this.value;
        this.div = $('<div class="dice"></div>');
        this.roll();
        $(this.div).text(this.value);
        $('div:first').append(this.div);
        $(this.div).click(() => {
            this.roll();
            $(this.div).text(this.value);
        })
    }
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
};

$('body').prepend('<button>Generate Die</button>');

let dice = [];

$('button:first').click(function() {
    let newDie = new Die();
    dice.push(newDie);
    console.log('you is clicking me');
});

$('button:first').after('<button>Roll Dice</button>');

$('button:last').after('<div></div>')

$('button:last').click(function() {
    dice.forEach(die => {
        die.roll();
        die.div.text(die.value);
    });
});

$('div:first').after('<button>Sum</button>');

$('button:last').click(() => {
    dice.forEach(value => {
        let getSum = 0;
        getSum += parseInt(value);
        console.log(getSum);
    })
})