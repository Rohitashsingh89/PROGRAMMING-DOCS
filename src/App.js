import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Docs from "./Docs/Docs";
import Content from './Docs/Content';
import SubTitle from './Docs/SubTitle';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/docs/:sectionId" element={<Docs />} />
      <Route path="/docs/:sectionId/:subtitleId" element={<Docs />} />
    </Routes>
    </>
  );
}

export default App;
