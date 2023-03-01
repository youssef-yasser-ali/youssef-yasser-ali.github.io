import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Header from "./components/Sections/Header";
import Social from "./components/Social/Social";
import Email from "./components/Email/Email";

function App() {
  return (
    <>
      <NavBar />
      <Social />
      <Email />
      <Header />
    </>
  );
}

export default App;
