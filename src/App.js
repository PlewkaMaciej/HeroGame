import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartGamePage/StartPage";
import GameWindow from "./components/GameWindow/GameWindow";
import Hero from "./components/GameWindow/hero/Hero";
function App() {
  return (
    <>
    <Router>
<Routes>
<Route exact path="/" element={<StartPage/>}></Route>
<Route exact path="/GameWindow" element={<GameWindow/>}></Route>
</Routes>    
    </Router>
    </>
  );
}

export default App;
