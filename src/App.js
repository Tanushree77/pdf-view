// App.js
import React from 'react';
import './tailwind.css'; 
import PDFViewer from './pages/PDFViewer';
import QuranPdf from './pages/QuranPdf';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    // 
    // <NavbarComponent />
    //  {/* <PDFViewer /> */}
    //  <QuranPdf />
    //  </div>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<QuranPdf />} />
    <Route path="/pdfviewer" element={<PDFViewer />} />
    
          </Routes>
      {/* <Route path="/quranpdf" component={QuranPdf} /> */}
    {/* <NavbarComponent />
      <QuranPdf /> */}
 
      
    </BrowserRouter>
  );
}

export default App;







  


