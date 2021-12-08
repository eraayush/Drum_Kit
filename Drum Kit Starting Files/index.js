var numberOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrums; index++) {
    document.querySelectorAll("button")[index].addEventListener("click" ,function () {
        
        var buttanKey = this.innerHTML;
        keyPressSound(buttanKey);
        animationButton(buttanKey);    
    });
    
}

document.addEventListener("keypress" , function(event){
    keyPressSound(event.key);
    animationButton(event.key);
});

function keyPressSound (key) {
    
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;

        case "a":
            var audio1 = new Audio('sounds/tom-2.mp3');
            audio1.play();
        break;

        case "s":
            var audio2 = new Audio('sounds/tom-3.mp3');
            audio2.play();
        break;

        case "d":
            var audio3 = new Audio('sounds/tom-4.mp3');
            audio3.play();
        break;

        case "j":
            var audio4 = new Audio('sounds/snare.mp3');
            audio4.play();
        break;

        case "k":
            var audio5 = new Audio('sounds/kick-bass.mp3');
            audio5.play();
        break;

        case "l":
            var audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
        break;

        default:
            console.log(buttanKey);
    }

}

function animationButton (CurrentKey){
    var actionButton = document.querySelector("." + CurrentKey);
    actionButton.classList.add("pressed");
    setTimeout(() => {
        actionButton.classList.remove("pressed");
    }, 200);
}




// this.style.color = "white" ;

// function Handclick(){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// }

// document.querySelectorAll(".drum")[1].addEventListener("click" , Handclick)
// function Handclick(){
//          alert("Hello");
//     }