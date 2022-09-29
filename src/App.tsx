import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Default from 'pages/Default';
import Club from 'pages/Club';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Default />}>
            <Route path='sobre' element={<Club />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
