import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Sections/Header";

import Contact from "./components/Contact/Contact";

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#282c34",
      }}
    >
      <p>Loading...</p>
    </div>
  );

  if (!isLoading) {
    page = (
      <>
        <NavBar />
        <Contact />
        <Header />
      </>
    );
  }

  return <> {page} </>;
}

export default App;
