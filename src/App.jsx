import { useState } from "react";
import "./App.css";
import BlurText from "./components/BlurText";
import SplitText from "./components/SplitText";

function App() {
  const [count, setCount] = useState(0);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h3>
        <SplitText
          text="Hi there!"
          className="!text-2xl font-semibold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h3>
      <h4>
        <BlurText
          text={`Welcome`}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl"
        />
        <BlurText
          text={`to`}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl"
        />
      </h4>
      <h1>
        <BlurText
          text="Alpha Square"
          disabled={false}
          speed={3}
          className="custom-class text-[8rem] font-bold border-4 border-white"
        />
      </h1>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
