import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";

import Contact from "./components/Contact/Contact";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Experience from "./components/Sections/Experience/Experience";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Sections/Projects/Projects";
import ContactUs from "./components/Sections/Contact/ContactUs";
import Footer from "./components/Footer/Footer";

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
    // Render the loading view while isLoading is True
    <Loading />
  );

  if (!isLoading) {
    page = (
      <>
        <NavBar />
        <Contact />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactUs />
        <Footer />
      </>
    );
  }

  return <> {page} </>;
}

export default App;
