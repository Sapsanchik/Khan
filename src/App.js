import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Economic from './components/Pages/Economic';
import FinancePage from './components/Pages/Economic/FinancePage';
import Home from './components/Pages/Home';
import Layout from './components/Pages/Layout';
import Math from './components/Pages/Math';
import TrigonometryPage from './components/Pages/Math/TrigonometryPage';
import Science from './components/Pages/Science';
import SciencePage from './components/Pages/Science/SciencePage';
import Informatic from './components/Pages/Informatic';
import InfoPage from './components/Pages/Info/InfoPage';
import History from './components/Pages/History';
import HistoryPage from './components/Pages/History/HistoryPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="math" element={<Math />} />
          <Route path="math/trigonometry" element={<TrigonometryPage />} />
          <Route path="math/statistic" element={<TrigonometryPage />} />
          <Route path="science" element={<Science />} />
          <Route path="science/biology" element={<SciencePage />} />
          <Route path="science/electric" element={<SciencePage />} />
          <Route path="science/physic" element={<SciencePage />} />
          <Route path="science/organ" element={<SciencePage />} />
          <Route path="science/chemic" element={<SciencePage />} />
          <Route path="science/cosmos" element={<SciencePage />} />
          <Route path="economic" element={<Economic />} />
          <Route path="economic/finance" element={<FinancePage />} />
          <Route path="info" element={<Informatic /> } />
          <Route path="info/informatic" element={<InfoPage />} />
          <Route path="history" element={<History />} />
          <Route path="history/world" element={<HistoryPage />} />
          <Route path="history/art" element={<HistoryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
