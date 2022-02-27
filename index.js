document.addEventListener('DOMContentLoaded',()=>{
    
    let letters = ['a','b','c','d','e','f'];
    //Function for return a random number to become to random color
    function randomColors(min=0,max=0) {
        return {
            number: Math.floor(Math.random()*(max+1-min))+min,
            letter: Math.floor(Math.random()*letters.length)
        };
    }

    const background = document.querySelector('.background');
    const indication = document.querySelector('.indication');

    function hit (e){
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[alt-key="${e.keyCode}"]`);

        if(!audio) return

        [colorOne, colorTwo, colorThree] = [randomColors(0,9).number, randomColors(0,9).number, randomColors(0,9).number];

        letters.sort(()=> Math.random() - 0.5);
        [randomLetter, randomLetter2, randomLetter3] = [randomColors().letter, randomColors().letter, randomColors().letter];
        console.log(letters);

        
        key.style.backgroundImage = `radial-gradient(#${colorOne}${letters[randomLetter]}${colorTwo}${letters[randomLetter2]}${colorThree}${letters[randomLetter3]}, #${colorTwo}${letters[randomLetter3]}${colorThree}${letters[randomLetter]}${letters[randomLetter2]}${colorOne})`

        key.addEventListener('transitionend',()=>{
            key.style.backgroundImage= 'none';        
        })

        indication.style.opacity= '0'
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
    
    window.addEventListener('keydown',hit)
})