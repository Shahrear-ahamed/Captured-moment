import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import QuestionAns from "./component/QuestionAns/QuestionAns";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Shop />
      <QuestionAns />
      <Footer />
    </div>
  );
}

export default App;
