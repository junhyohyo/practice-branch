// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
// import TranslateResult from './components/TranslateResult';

// function App() {
//   return (
//     <div className="App">
//       {/* <Home />       */}
//       <TranslateResult />
//     </div>
//   );
// }

// export default App;

// <div className="App">
    //   <nav>
    //   <Link to="/">홈페이지</Link>
    //   <Link to="/translate">번역결과</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/translate" element={<TranslateResult />} />
    //   </Routes>
    // </div>

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TranslateResult from './components/TranslateResult';
import Download from './components/Download';
import About from './components/About';
import Navbarelement from './components/Navbarelement';

function App() {
  return (
    <Router>
      <Navbarelement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<TranslateResult />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;


