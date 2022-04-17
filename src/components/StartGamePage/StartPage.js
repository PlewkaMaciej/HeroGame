import "./startPage.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
function StartPage() {
return(
    <>
    <div className="main-container">
    <div className="container">
<Link to="/GameWindow"><Button variant='info' className="button-start-game">Start game</Button></Link>
    </div>
    </div>
    </>
)
}
export default StartPage;