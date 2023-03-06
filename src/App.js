import "./App.css";
import { Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Works from "./components/Works";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
