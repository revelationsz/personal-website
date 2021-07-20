import React,{useState}from 'react'
import './Jobs.css'
import Footer from '../Footer'

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import resume from '../images/Resume.pdf'


function Resume() {

    const [deafulePDFFile]=useState(resume)

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            
             <div className='pdf_container'>
                    {deafulePDFFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={deafulePDFFile}
                        plugins={[defaultLayoutPluginInstance]} />
                    </Worker></>}
                </div>
        </div>
    )
}

export default Resume
