var drumLength = document.querySelectorAll(".drum").length;

for (var i = 0 ; i<drumLength; i++){
    document.querySelector(".drum")[i].addEventListener("click", function () {alert("i got clicked");
});
 
    
}

// for (let index = 0; index < buttonlist.length; index++) {
//        buttonlist[index].addEventListener("click", function () {
//         alert("i got clicked");
//     });
    
// }