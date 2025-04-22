
import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// ✅ Added <About> component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is the About section.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home /> {/* ✅ Used the Home component */}
      <About /> {/* ✅ Used the About component */}
    </div>
  );
}

export default App;
