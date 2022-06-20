import "./App.css";
import Login from "./containers/Login";
import {Routes,Route} from 'react-router-dom'
import Trello from "./components/TrelloHeader";

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/zamirbekovsamagan" element={<Login/>}/>
          <Route exact path="/zamirbekovsamagan/trello" element={<Trello/>}/>
        </Routes>
      </div>
  );
}

export default App;
