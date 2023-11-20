
// import header from './components/header';
// import footer from '.components/footer';
// import herosection  from './components/herosection';
// import { Component } from 'react';
// function App() {
//   return (
//     <header/>

    
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header'; // Corrected import statement
import Footer from './components/footer'; // Corrected import statement
import HeroSection from './components/herosection'; // Corrected import statement

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;

