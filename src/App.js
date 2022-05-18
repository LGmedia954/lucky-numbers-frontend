import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from "./containers/MainContainer";
import NewGameContainer from "./containers/MainContainer";
import GameRoundsContainer from "./containers/GameRoundsContainer";
import Instructions from "./containers/Instructions";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/rounds/new" element={<NewGameContainer />} />
        <Route path="/rounds" element={<GameRoundsContainer />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </div>
  );
}


export default App;