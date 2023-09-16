import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { Document, Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  const location = useLocation();
  const pdfLink = location.state.pdfLink;
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const handleBack = () => {
    window.history.back();
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }
    , [])

  return (
    <div className="flex flex-col justify-items-center w-full h-auto bg-gray-50 overflow-hidden">
      <div className='top-2 bg-white shadow-md w-full h-20 flex pt-4'>
        <div className='flex-start font-bold ml-16 pt-2'>
          <MdArrowBackIos size={15} onClick={() => handleBack()} className='bold-icon font-bold cursor-pointer' />
        </div>
        <div className='flex-grow text-center'>
          <h5 className='text-xl font-lato'>পবিত্র কুরআন </h5>
        </div>

      </div>

      <div className='' >
      <Document  file={pdfLink} onLoadSuccess={onDocumentLoadSuccess} >
          <Page
          //  key={`page_${index + 1}`}
            pageIndex={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={window.innerWidth}
            height={window.innerHeight}
             />
        
      </Document>
      </div>
      

     
      {/* </meta> */}

    </div>

  );
};

export default PDFViewer;
