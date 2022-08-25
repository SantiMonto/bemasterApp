import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import ContentCategory from "./Components/ContentCategory";
import ContentDetails from "./Components/ContentDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="/home/:id" element={<ContentCategory />}/>
            <Route path="/home/:id/:id" element={<ContentDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
