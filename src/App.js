import "./App.css";
import Login from "./containers/Login";
import {Routes,Route} from 'react-router-dom'
import Trello from "./components/TrelloHeader";
import HomePage from "./components/HomePage";

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/trello" element={<Trello/>}/>
        </Routes>
      </div>
  );
}

export default App;
