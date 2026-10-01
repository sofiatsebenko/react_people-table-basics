import './App.scss';

import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import { NotFound } from './components/NotFound';
import { PeoplePage } from './components/PeoplePage';

export const App = () => (
  <HashRouter>
    <div data-cy="app">
      <Navigation />

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:slug" element={<PeoplePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  </HashRouter>
);
