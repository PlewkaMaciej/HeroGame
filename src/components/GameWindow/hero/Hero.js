import { useEffect, useState, useRef } from "react"
import "./hero.css"
import "./hero.png"
import heroJump from "./HeroJump";
function Hero() {
    const [running, setRunning] = useState(0);
    const [jumping,setJumping]=useState(0);
    const myHero = useRef(null)
useEffect(()=>{
    heroJump(jumping,myHero,setJumping)
},[jumping])
    useEffect(() => {
        myHero.current.style.bottom="40px"
        myHero.current.style.left = "500px"
        document.onkeydown = ((e) => {
            if (e.keyCode === 37) {
                setRunning(1)
            }
            if (e.keyCode === 39) {
                setRunning(-1)
            }
            if(e.keyCode===32){
                setJumping(1)
            }
        })
        document.onkeyup = ((e) => {
            if (e.keyCode === 37) {
                setRunning(0)
            }
            if (e.keyCode === 39) {
                setRunning(0)
            }
        })
    }, [])
    useEffect(
        () => {
            if(running===1){
                const interval = setInterval(() => {
                    let x = parseInt(myHero.current.style.left.slice(0, -2)) - 5
                    myHero.current.style.left = x + "px"
                }, 10);
                return () => clearInterval(interval);  }
if(running===-1){
    const interval1 = setInterval(() => {
        let x = parseInt(myHero.current.style.left.slice(0, -2)) +5
        myHero.current.style.left = x + "px"
    }, 10);
    return () => clearInterval(interval1);
}
        },
        [running]
    );



    return (
        <>
            <div className="heroContainer">
                <div ref={myHero}  className="myHero"> </div>
            </div>
        </>
    )
}
export default Hero;