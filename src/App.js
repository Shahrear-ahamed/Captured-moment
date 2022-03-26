import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import QuestionAns from "./component/QuestionAns/QuestionAns";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Shop />
      <QuestionAns />
    </div>
  );
}

export default App;
