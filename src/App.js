import "./App.css";
import { Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/HomePage"));
const Login = lazy(() => import("./containers/Login"));
const Trello = lazy(() => import("./containers/Trello"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/trello" element={<Trello />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
