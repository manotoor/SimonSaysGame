var simonPattern = [];
var myColors = ['Red', 'Green', 'Blue', 'White'];
var clientPattern = [];
var simonTurn = true;
var position = 0;
function buttonPressed() {
    //Player turn
    if(!simonTurn){
        if(position > simonPattern.length){
            simonTurn = true;
            resetRound();
        }else{
            let color = event.target.id;
            clientPattern.push(color);
            console.log('Client chose ' + color);
            console.log('Position: ' + position);
            console.log(simonPattern[position] == clientPattern[position]);
            if(simonPattern[position] == clientPattern[position]){
                position++;
                if(position == simonPattern.length){
                    simonTurn = true;
                    resetRound();
                }
            }
            else
                resetGame();
        }
    }
}
//Went Play or Reset is Pressed
//Toggle between name and either start or reset game
function runSimon(){
    var elem = event.target;
    if(elem.innerHTML == "PLAY"){
        elem.innerHTML = "RESET";
        startGame();
    }else{
        elem.innerHTML = "PLAY";
        resetGame();
    }
}
//Simon picks a new color at random
function getPattern(){
    let random = Math.floor(Math.random() * 4);
    simonPattern.push(myColors[random]);
}
//Initial Run
function startGame(){
    getPattern();
    playPattern();
    simonTurn = false;
    document.getElementById('roundNumber').innerHTML= "Round " + simonPattern.length;
}
function resetRound(){
    if(simonTurn){
        position = 0;
        clientPattern = [];
        startGame();
    }
}
function playPattern(){
    for(let i=0; i <simonPattern.length;i++){
        console.log('Simon chose ' + simonPattern[i]);
    }
}
function resetGame(){
    simonPattern = [];
    clientPattern = [];
    document.getElementById('play').innerHTML = "PLAY";
    document.getElementById('roundNumber').innerHTML = "Press Play";
    position = 0;
}