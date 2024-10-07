import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import Home from "./pages/Home.jsx"
import Error from "./pages/Error.jsx";
import PagesParser from "./funcs/PagesParser.jsx";
import './root.css';
import './app.css';

export const PagesContext = createContext();

function App() {
  const [pages, setPages] = useState(() => {
    const savedPages = localStorage.getItem('pages')
    return savedPages
      ? JSON.parse(savedPages)
      : [
        {
          name: 'Blank Page',
          elements: [
            {
              type: 'h1',
              innerHTML: 'Hello! That is a blank page!'
            },
            {
              type: 'p',
              innerHTML: 'Write something here.'
            }
          ]
        }
      ]
  });

  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(pages));
  }, [pages]);

  let array = PagesParser(pages);
  console.log(array);

  return (
    <>
      <PagesContext.Provider value={[pages, setPages]}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </PagesContext.Provider>
    </>
  )
}

export default App
