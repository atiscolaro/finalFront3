import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import ThemeProvider from "./Components/utils/themeContext";


function App() {

  return (
    <>
      <div className="App">

        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/favs' element={<Favs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path=':id' element={<Detail />} />
          </Routes>
          <Footer />
        </ThemeProvider>


      </div>
    </>
  );
}

export default App;