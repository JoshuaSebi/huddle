import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Eventpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
