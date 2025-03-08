import "./App.css";
import BlurText from "./components/BlurText";
import SplitText from "./components/SplitText";

function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
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
    </>
  );
}

export default App;
