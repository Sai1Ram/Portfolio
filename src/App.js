import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Main = lazy(()=> import("./components/Main"))


function App() {
  return (
    <Suspense fallback={<Loader/>}>
    <div className="overflow-hidden bg-bgColor">
      <Main/>
    </div>
    </Suspense>
  );
}

export default App;
