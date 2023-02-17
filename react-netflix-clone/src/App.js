import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainSearch from "./components/MainSearch";

function App() {
  return (<>
    
    <BrowserRouter>
    <MainPage/>
    <MainSearch/>
    <Sidebar/>
    <Player/>

    <Routes>
      <Route path='/'/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
