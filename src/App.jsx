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

  return (
    <>
      {isLoading ? (
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
      ) : (
        // Render the actual content when isLoading is false
        <>
          <NavBar />
          <Contact />
          <Header />
        </>
      )}
    </>
  );
}

export default App;
