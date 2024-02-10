import "./App.css";
import Accordian from "./components/accordian/index.jsx";
import RandomColor from "./components/randomColor/RandomColor.jsx";
import StarRating from "./components/starRating/StarRating.jsx";

function App() {
  return (
    <>
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}
      
      {/* Star Rating Component */}
      <StarRating noOfStars={5}/>
    </>
  );
}

export default App;
