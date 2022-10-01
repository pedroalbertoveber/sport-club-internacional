import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Default from 'pages/Default';
import Club from 'pages/Club';
import Honours from 'pages/Honours';
import Team from 'pages/Team';
import Player from 'pages/Player';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Default />}>
            <Route path='sobre' element={<Club />} />
            <Route path='trofeus' element={<Honours />} />
            <Route path='plantel' element={<Team />} />
            <Route path='plantel/:n' element={<Player />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
