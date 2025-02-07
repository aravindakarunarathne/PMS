// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// ///////////////////////////

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Medicines from './pages/Medicines';
// import Navbar from './components/Navbar';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/medicines" element={<Medicines />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

/////////////////////Improvement Code

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { MedicineProvider, useMedicine } from './context/MedicineContext';
// import MedicineList from './components/MedicineList';
// function App() {
//   return (
//     <MedicineProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<MedicineList />} />
//         </Routes>
//       </Router>
//     </MedicineProvider>
//   );
// }
// export default App;


/////////////////////Error correction code

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MedicineProvider } from './context/MedicineContext'; // Correct import
import MedicineList from './components/MedicineList';

function App() {
  return (
    <MedicineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MedicineList />} />
        </Routes>
      </Router>
    </MedicineProvider>
  );
}

export default App;
