import { BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Topbar from "./components/Topbar";





function App() {
  return (<>
    
    <BrowserRouter>
   
    <div className="container-fluid d-flex page-wrapper">
    <Sidebar/>

    <Topbar/>
    <MainPage/>
 
    
  
    </div>
   
   

    <Player/>
   
    <Routes>
    
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
