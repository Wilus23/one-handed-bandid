const game = new Game(200);

var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;
function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;"
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658"
    }
}

function stop(){
    playPause();
    audio.pause();
    audio.currentTime = 0;
}



//Music 

// let audio = document.getElementById("audio");
// audio.volume = .8;
// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// if (!isChrome){
//     $('#iframeAudio').remove()
// }
// else {
//     $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
// }