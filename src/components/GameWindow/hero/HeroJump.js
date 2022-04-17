function heroJump(jumping,myHero,setJumping){
   if(jumping===1){
    const intervalJump = setInterval(() => {
        let y = parseInt(myHero.current.style.bottom.slice(0, -2)) + 2
        myHero.current.style.bottom = y + "px"
        if(myHero.current.style.bottom.slice(0,-2)>=190){
            clearInterval(intervalJump)
            const intervalFallDown = setInterval(() => {
                let y = parseInt(myHero.current.style.bottom.slice(0, -2))-2
                myHero.current.style.bottom = y + "px"
                if(myHero.current.style.bottom.slice(0,-2)<=40){
                    clearInterval(intervalFallDown)
                    setJumping(0)
                }
            }, 1);
        }
    }, 5);
   
}
}
export default heroJump;