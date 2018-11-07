class Die {
    constructor() {
        this.value;//sets value
        this.div = $('<div class="dice"></div>');//sets created div as this.div
        this.roll();//sets roll() function to this
        $(this.div).text(this.value);//sets roll() value to div text
        $('div:first').append(this.div);//adds new div to dice container
        $(this.div).click(() => {
            this.roll();
            $(this.div).text(this.value);
        });//click to run roll() and add the value to this.div's text
    }
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    };//generates a value between 1-6
};

$('body').prepend('<button>Generate Die</button>');//adds button to beginning of body

let dice = [];//creates an array for dice or each die

$('button:first').click(function() {
    let newDie = new Die();//creates a new Die
    dice.push(newDie);//adds the new die to the dice array
});//on click do the above

$('button:first').after('<button>Roll Dice</button>');//creates another button after 'Generate Die'

$('button:last').after('<div></div>');//creates the div container for dice

$('button:last').click(function() {
    dice.forEach(die => {
        die.roll();
        die.div.text(die.value);
    });
});//on click reroll all dice and append a new value to each individual Die

$('div:first').after('<button>Sum</button>');//creates a 'Sum' button

$('button:last').click(() => {
    let getSum = 0;
    dice.forEach(Die => {
        let value = Die.value
        getSum += value;
    });
    console.log(getSum);
});//grabs all values and adds them to getSum to log the total value of all the dice on screen