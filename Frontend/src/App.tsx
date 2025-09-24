import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Eventpage";
import Navbar from "./components/Navbar";
import EventDetailsPage from "./pages/EventDetailsPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Eventpage />} />
            <Route path="/events/:id" element={<EventDetailsPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;