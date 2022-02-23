document.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('keydown',(e)=>{
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[alt-key="${e.keyCode}"]`);
        if(!audio) return
        // key.forEach(item =>{
        //     item.classList.add('playing');
        // })
        key.classList.add('playing');
        // key.style.opacity = '1';
        audio.currentTime = 0;
        audio.play();
        window.addEventListener('keyup',()=>{
            key.classList.remove('playing');
            // key.style.opacity = '0.8';
        })
    })
})