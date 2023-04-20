import React, { useEffect } from 'react';
import './App.css'
import { ZoomIntegration } from './Components/Screens/ZoomIntegration';
import VideoLibrary from './Components/Screens/VideoLibrary/VideoLibrary';
import {CountDownTimer} from './Components/Screens/CountDownTimer';
import Header from './Components/Header/Header';
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {Home} from "./Components/Home/Home"
const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/")
  },[])
  return (
    <div className="App">
       <Header/>
       <Routes>
       <Route  path="/"   element={<Navigate to="/home" replace />}> </Route>
       <Route exact path="/home"    Component={Home}></Route>
       <Route exact path="/Infiniminute"   Component={CountDownTimer}></Route>
        <Route path='/Infinipath' Component={ZoomIntegration}></Route>
        <Route exact path="/InfiniAcademy"  Component={VideoLibrary}></Route>
        <Route exact path="*" Component={PageNotFound}></Route>
       </Routes>
   
     
    </div>
  );
};
export default App;
