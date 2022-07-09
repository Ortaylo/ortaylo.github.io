import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import React, { useState } from 'react';
function App() {
  const [selectedPage, setSelectedPage] = useState([<About/>,'About'])
  {document.title = selectedPage[1]}
  return (
    <div className="App">
      <header className="App-header">
        My Portfolio
        <Nav 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      </header>
      {selectedPage[0]}
    </div>
  );
}

export default App;
