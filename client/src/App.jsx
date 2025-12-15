import { Route, Router } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
      <Footer />
    </>
  )
}

export default App;
