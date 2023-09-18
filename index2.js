var drumlength = document.querySelectorAll(".drum").length;

for (var i = 0 ; i <drumlength; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () { var audio = new Audio("sounds\crash.mp3"); Audio.play()});
}



// function sond() {
//     var w_sound = new Audio('sounds\crash.mp3');
//     Audio.play()
// }