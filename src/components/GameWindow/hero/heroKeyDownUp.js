function heroKeyDownUp(setJumping,setRunning){
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
}
export default heroKeyDownUp