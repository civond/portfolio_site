import {useState} from 'react'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBriefcase, faBook, faWaveSquare } from '@fortawesome/free-solid-svg-icons';


function Tabs({ activeTab, setActiveTab }) {
    
    return (
        
        <>
            <div className="tabs">
                <ul>
                    <li onClick={() => {
                        setActiveTab(0);
                        console.log("active tab:", 0);}}
                        className={`tab ${activeTab === 0 ? "active" : "inactive"}`}>
                        
                        <div className='icon'>
                            <FontAwesomeIcon icon= {faMessage} /> 
                        </div>
                        <div className='text'>
                            Biography   
                        </div>
                    </li>
                    
                    <li onClick={() => {
                        setActiveTab(1);
                        console.log("active tab:", 1);}}
                        className={`tab ${activeTab === 1 ? "active" : "inactive"}`}>
                        <div className='icon'>
                            <FontAwesomeIcon icon= {faWaveSquare} /> 
                        </div>
                        <div className='text'> 
                            Projects
                        </div>
                    </li>

                    <li onClick={() => {
                        setActiveTab(2);
                        console.log("active tab:", 2);}}
                        className={`tab ${activeTab === 2 ? "active" : "inactive"}`}>
                        <div className='icon'>
                            <FontAwesomeIcon icon= {faBriefcase} /> 
                        </div>
                        <div className='text'> 
                            Experience
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Tabs