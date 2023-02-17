import { BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";




function App() {
  return (<>
    
    <BrowserRouter>

    <MainPage/>
 
    <Sidebar/>
 
    <Player/>

    <Routes>
    
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
