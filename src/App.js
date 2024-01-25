import logo from "./assets/images/logo192.png"
import './App.css';
import Navbar from "./IndexSection/Navbar";
import Footer from "./IndexSection/Footer";
import Hero from "./Components/Hero";
import DocsSection from "./Components/DocsSection";
import Launch from "./Components/Launch";
import Header from "./Docs/Header";
import Sidebar from "./Docs/Sidebar";
import Content from "./Docs/Content";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Docs from "./Docs/Docs";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
    </>
  );
}

export default App;
