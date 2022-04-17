import { useEffect, useState, useRef } from "react"
import "./hero.css"
import "./hero.png"

function Hero() {
    const [running, setRunning] = useState(0);
    const [jumping,setJumping]=useState(0);
    const myHero = useRef(null)
useEffect(()=>{
    if(jumping===1){
        const intervalJump = setInterval(() => {
            let y = parseInt(myHero.current.style.bottom.slice(0, -2)) + 2
            myHero.current.style.bottom = y + "px"
            console.log(myHero.current.style.bottom)
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
},[jumping])
    useEffect(() => {
        myHero.current.style.bottom="40px"
        myHero.current.style.left = "500px"
        document.onkeydown = ((e) => {
            if (e.keyCode == 37) {
                setRunning(1)
            }
            if (e.keyCode == 39) {
                setRunning(-1)
            }
            if(e.keyCode==32){
                setJumping(1)
            }
        })
        document.onkeyup = ((e) => {
            if (e.keyCode == 37) {
                setRunning(0)
            }
            if (e.keyCode == 39) {
                setRunning(0)
            }
        })
    }, [])
    useEffect(
        () => {
            if (running===1) {
                const interval = setInterval(() => {
                    let x = parseInt(myHero.current.style.left.slice(0, -2)) - 5
                    myHero.current.style.left = x + "px"
                }, 10);

                return () => clearInterval(interval);
            }
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