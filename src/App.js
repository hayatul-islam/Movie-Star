import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies/Movies';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
