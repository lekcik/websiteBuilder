import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
