import React from 'react';
import './ProjectContainer.css';
import $ from 'jquery';

function ProjectContainer(props) {

    function setUp(){
        let arr = props.languages        
        return (
             <div> 
                {arr?.map(e => <p className="col"> {e} </p>)}
             </div>
        )
    }

    return (
        <>
            <div id="body" className="body container">
                <div className="row" id="info">
                    <div className="col-3">
                        <h1 id="title">img here</h1>
                    </div>
                    <div className="col-9"> 
                        <h3 id="projectTitle">{props.title}</h3>
                        <p id="projectInfo">{props.info}</p>
                        <div id="projectLanguages">{setUp()}</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProjectContainer