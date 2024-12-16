let run = document.querySelector('.run');
let pass = document.querySelector('.pass');
let runButton = document.querySelector('.runButton');
let passButton = document.querySelector('.passButton');
let hurryUp = document.querySelector('.hurryUp')
let timeOut = document.querySelector('.timeOut');
let text = document.querySelector('.text');
let calebHandoff = document.querySelector('.calebHandoff');
let calebThrow = document.querySelector('.calebThrow');
let sadFlus = document.querySelector('.sadFlus');
let flusTimeOut = document.querySelector ('.flusTimeOut');
let fieldGoal = document.querySelector('.fieldGoal');
let hailMary = document.querySelector('.hailMary');
let winner = document.querySelector('.winner');

hurryUp.style.display = "none";
timeOut.style.display = "none";
calebHandoff.style.display = "none";
calebThrow.style.display = "none";
sadFlus.style.display = "none";
flusTimeOut.style.display = "none";
fieldGoal.style.display = "none";
hailMary.style.display = "none";
winner.style.display = "none";


runButton.addEventListener('click', function () {

    run.style.display = "none";
    pass.style.display = "none";
    runButton.style.display = "none";
    passButton.style.display = "none";
    calebHandoff.style.display = "block";

    text.innerHTML = "You gain 15 yards on the run! First down, Bears. Now, do you call a timeout and regroup your team, or try to hurry up and run a play?"
 
    hurryUp.style.display = "block";
    timeOut.style.display = "block";
});

passButton.addEventListener('click', function () {

    run.style.display = "none";
    pass.style.display = "none"; 
    runButton.style.display = "none";
    passButton.style.display = "none";
    calebThrow.style.display = "block";

    text.innerHTML = "Caleb Williams throws an absolute dime over the middle to get to the 35-yard line! First down, Bears. Now, do you call a timeout and regroup your team, or try to hurry up and run a play?"

    hurryUp.style.display = "block";
    timeOut.style.display = "block";

});

hurryUp.addEventListener('click', function () {

    hurryUp.style.display = "none";
    timeOut.style.display = "none";
    calebHandoff.style.display = "none";
    calebThrow.style.display = "none";

    sadFlus.style.display = "block";

    text.innerHTML = "Your team couldn't get set fast enough. You lose the game, and you get fired the next day. Put your mouse over Coach Flus to start over."

});


sadFlus.addEventListener('mouseover', function () {

    sadFlus.style.display = "none";

    run.style.display = "block";
    pass.style.display = "block";
    runButton.style.display = "block";
    passButton.style.display = "block";

    text.innerHTML = "You are the Head Coach of the Chicago Bears. Your team is losing to the Green Bay Packers 24-23 with 6 seconds left in the game. It's 3rd down and 4 at the 50-yard line. You have one timeout left. Do you call a running play or a pass play?"

});


timeOut.addEventListener('click', function () {

    hurryUp.style.display = "none";
    timeOut.style.display = "none";
    calebHandoff.style.display = "none";
    calebThrow.style.display = "none";

    flusTimeOut.style.display = "block"

    text.innerHTML = "You called a timeout with just two seconds left! Now, time to make a crucial decision. Try the long field goal or one final throw to the endzone?"

    fieldGoal.style.display = "block";
    hailMary.style.display = "block";

});

fieldGoal.addEventListener('click', function () {

    fieldGoal.style.display = "none";
    hailMary.style.display = "none";
    flusTimeOut.style.display = "none";

    winner.style.display = "block";

    text.innerHTML = "THE KICK IS GOOD! The Bears beat the Packers 26-24! You are hailed as the next great Bears coach! Congratulations! Reload the page to play again."

});

hailMary.addEventListener('click', function () {

    fieldGoal.style.display = "none";
    hailMary.style.display = "none";
    flusTimeOut.style.display = "none";

    sadFlus.style.display = "block";

    text.innerHTML = "Caleb heaves the ball to the endzone, but the pass is dropped. Bears lose, and people are wondering what you were thinking by not taking the field goal. Hover over Coach Flus to try again."

});