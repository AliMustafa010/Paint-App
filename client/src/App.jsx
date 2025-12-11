import { Route, Router } from "react-router-dom";
import Home from "./Pages/Home/Home"

function App() {

  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </>
  )
}

export default App;
