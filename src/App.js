import "./App.css";
import { Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import About from "./components/Profile";
import MySkills from "./components/MySkills";
import Blogs from "./components/Blogs";
import Works from "./components/Works";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<About />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
