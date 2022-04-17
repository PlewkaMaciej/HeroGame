function heroMoveLeft(myHero){
        const interval = setInterval(() => {
            let x = parseInt(myHero.current.style.left.slice(0, -2)) - 5
            myHero.current.style.left = x + "px"
        }, 10);
        return () => clearInterval(interval);  
}
export default heroMoveLeft;