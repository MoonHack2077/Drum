document.addEventListener('DOMContentLoaded',()=>{

    
    //Function for return a random number to become to random color
    function randomNumber(min,max) {
        return Math.floor(Math.random()*(max+1-min))+min;
    }


    const background = document.querySelector('.background');

    function clip (e){
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[alt-key="${e.keyCode}"]`);
        if(!audio) return

        const colorOne = randomNumber(0,9);
        const colorTwo = randomNumber(0,9);
        const colorThree = randomNumber(0,9);
        const letters = ['a','b','c','d','e','f']
        const randomIndex = Math.floor(Math.random()*letters.length);
        const randomIndex2 = Math.floor(Math.random()*letters.length);
        const randomIndex3 = Math.floor(Math.random()*letters.length);

        key.style.backgroundImage = `radial-gradient(#${colorOne}${letters[randomIndex]}${colorTwo}${letters[randomIndex2]}${colorThree}${letters[randomIndex3]}, #${colorTwo}${letters[randomIndex3]}${colorThree}${letters[randomIndex]}${colorOne}${letters[randomIndex2]})`
        key.addEventListener('transitionend',()=>{
            key.style.backgroundImage= 'none';        
        })

        background.classList.add('gray');
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }

    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', ()=>{
            key.classList.remove('playing');
        })
    })
    
    background.addEventListener('transitionend', ()=>{
        background.classList.remove('gray');
    })
    
    window.addEventListener('keydown',clip)
})