import "./gameWindow.css"
import Hero from "./hero/Hero";
function GameWindow(){
    return(
<>
<div className="container-game">
    <Hero/>
    <div className="game-window-container">
    </div>
</div>
</>
)
}
export default GameWindow;