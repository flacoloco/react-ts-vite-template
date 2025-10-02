import type { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home } from './components/pages';
import './App.css';

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};
