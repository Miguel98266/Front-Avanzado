import React from "react";
import "./home.css";
import SongList from "@/components/SongList";
import SongDetails from "@/components/SongDetails";
import { SongProvider } from "@/context/SongContext";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
    <SongProvider>
    <Header/>
    <div className="home-container">
      
        <div className="izquierdo">
          <h2>Lado izquierdo</h2>
          <SongList />
        </div>
        <div className="derecho">
          <h2>Lado derecho</h2>
          <SongDetails />
        </div>
    </div>
    </SongProvider>
    </>
  );
};

export default Home;
