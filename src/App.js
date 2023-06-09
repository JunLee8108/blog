import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
