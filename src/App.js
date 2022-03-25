import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Shop from "./component/Shop/Shop";

function App() {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    fetch("productDb.json")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  return (
    <div>
      <Navbar />
      <Shop cameras={cameras}/>
    </div>
  );
}

export default App;
