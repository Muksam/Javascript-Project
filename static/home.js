
function ageInDays() {
    var age = parseInt(prompt('what is your age?'));
    if (isNaN(age)) {
        age = 0;
    }
    var ageinDayss = age * 365;
    var textAnswer = ' You are ' + ageinDayss + 'days' + ' years old .';
    document.getElementById('result').innerHTML = textAnswer;
}


function reset() {
    document.getElementById('result').remove();
}


function catGen() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://66.media.tumblr.com/tumblr_lon992p2oO1qkkx5qo1_250.jpg";
    div.appendChild(image);
}



function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice :', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log('result');

    message = finalMessage(results);
    console.log('message');

    rpsfrontend(yourChoice.id, botChoice, message);

}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    }

    yourScore = rpsDatabase[yourChoice][computerChoice];
    computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'you lost!', 'color': 'red' };
    }

    else if (yourScore === 0.5) {
        return { 'message': 'you tie', 'color': 'yellow' };
    }

    else {
        return { 'message': 'you have won', 'color': 'green' };
    }

}


function rpsfrontend(humanImageChoice, botImageChoice, finalmessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');


    //humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height = 150 width = 150>"

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +
        "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37 50 233 1)'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size: 60; padding: 30px;'>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243 38 24 1)'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


let all_button = document.getElementsByTagName('button');
console.log(all_button);

let copyAllbutton = [];
for (let i = 0; i < all_button.length; i++) {
    copyAllbutton.push(all_button[i].classList[1]);
}

console.log(copyAllbutton);


function colorChange(buttonChange) {
    if (buttonChange.value === 'red') {
        buttonsRed();
    }
    else if (buttonChange.value === 'green') {
        buttonsGreen();
    }
    else if (buttonChange.value === 'reset') {
        buttonColorReset();
    }
    else if (buttonChange.value === 'random') {
        buttonRandomColor();
    }
}


function buttonsRed() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllbutton[i]);
    }
}


function buttonRandomColor() {
    let choice = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];

    for (let i = 0; i < all_button.length; i++) {
        let random = Math.floor(Math.random() * 4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choice[random]);
    }

}







