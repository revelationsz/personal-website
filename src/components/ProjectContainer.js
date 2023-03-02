import React, {useEffect, useState} from 'react';
import './ProjectContainer.css';

function ProjectContainer(props) {
    let img = null
    
    let setimg = () => {
         if(props.img != null) 
        {
            console.log("tse")
            return <div className="col-2 d-flex justify-content-center align-items-center" id={props.type}>
                    <img src={props.img} id="projectIMG" />
                    </div>
        }
        else return null
    }


    return (
            <div id="body" className="body container pt-3">
                <div className="row d-flex justify-content-center" id="info">
                    {setimg()}
                    <div className="col-9"> 
                        <h3 id="projectTitle">{props.title}</h3>
                        <p id="projectInfo">{props.info}</p>
                        <div id="projectLanguages">Languages: {props.languages}</div>
                        <div id="projectTechnologies">Technologies: {props.technologies}</div> 
                    </div>
                </div>
            </div>
    )
}


export default ProjectContainer