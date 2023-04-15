import { Suspense, lazy } from "react";
import { Route, Routes} from "react-router-dom";
import Loader from "./components/Loader";
const Works = lazy(()=>import("./components/Works"));
const Profile = lazy(()=>import("./components/Profile"));
const Main = lazy(()=> import("./components/Main"))
// import Main from "./components/Main";
// import Works from "./components/Works";
// import Profile from "./components/Profile";

function App() {
  return (
    <>
    <Suspense fallback={<Loader/>}>

      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/works" element={<Works />} />
          <Route path="/loader" element={<Loader />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
