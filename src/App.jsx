import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Sections/Header/Header";

import Contact from "./components/Contact/Contact";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Experience from "./components/Sections/Experience/Experience";
import Loading from "./components/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  let page = (
    // Render the loading view while isLoading is true
    <Loading />
  );

  if (!isLoading) {
    page = (
      <>
        <NavBar />
        <Contact />
        <Header />
        <AboutMe />
        <Experience />
      </>
    );
  }

  return <> {page} </>;
}

export default App;
