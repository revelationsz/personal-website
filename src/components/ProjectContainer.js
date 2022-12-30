import React from 'react';
import './ProjectContainer.css';
import $ from 'jquery';

function ProjectContainer(props) {


    return (
        <>
            <div id="body" className="body container pt-3">
                <div className="row d-flex justify-content-center" id="info">
                    <div className="col-2 d-flex justify-content-center align-items-center" id={props.type}>
                        <img src={props.img} id="projectIMG" />
                    </div>
                    <div className="col-9"> 
                        <h3 id="projectTitle">{props.title}</h3>
                        <p id="projectInfo">{props.info}</p>
                        <div id="projectLanguages">Languages: {props.languages}</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProjectContainer