// window.addEventListener('keydown', function(e){
//     console.log(e.keyCode);                            // find keyCode by clicking on a button on your keyboard while looking at the console
// });

// _______________________________________
// play sound function
function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);      // fetch data key number which is linked to the button
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);              // fetch clicked key data
    
    if(!audio) return;                                                                // stop function from running if selected key is not set
    audio.currentTime = 0;                                                            // restart audio if clicked
    audio.play();                                                                     // play audio
    key.classList.add('playing');                                                     // add style when button is clicked
}


// _______________________________________
// remove style function
function removeTransition(e){
if(e.propertyName !== 'transform') return;                                             // skip if it's not a transform
// console.log(e.propertyName);                                                        // check what running class name
this.classList.remove('playing');                                                      // remove style after transition
}


// _______________________________________
// event listeners

const keys = document.querySelectorAll('.key');                                        // fetch all keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition));          // create an event that listens to removeTransition function
window.addEventListener('keydown', playSound);                                         // create an event that listens to playSound function