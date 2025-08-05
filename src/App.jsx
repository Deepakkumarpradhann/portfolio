import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import {Hero} from "./componets/Hero/Hero";
import {About} from "./componets/About/About";
import {Experience} from "./componets/Experience/Experience";



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
    
    </div>
  );
}

export default App;
