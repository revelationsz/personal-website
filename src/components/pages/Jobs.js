import React,{useState}from 'react'
import '../../App.css'
import Footer from '../Footer'
import './Jobs.css'
import JobContainer from '../JobContainer'

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import Resume from '../images/Whatmore Resume.pdf'
import Collapsible from 'react-collapsible'

export default function Product() {

    const [deafulePDFFile]=useState(Resume)

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const obj = <div className='obj'> Click for Resume</div>


    return( <> 
        <div className='whole_page'>
            <h1 className="page_head"> Jobs</h1>
            
            <JobContainer/>
            <Collapsible trigger={obj}  className='resume'
             transitionTime = "200" >
                <div className='pdf_container'>
                    {deafulePDFFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={deafulePDFFile}
                        plugins={[defaultLayoutPluginInstance]} />
                    </Worker></>}
                </div>
            </Collapsible>
        </div>
     </>  
    )
}

