import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faCrow, faChartLine, faBrain, faSyringe } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    return (
        <>
            <div> 
                <div className='experience'>
                    <div className='header'>
                        <FontAwesomeIcon className = 'icon' icon= {faHeartPulse} /> 
                        <h2>R&amp;D Engineer Intern</h2>
                    </div>
                    <div className='biography'>Relay Response, XiMiO Health (2025-Present)</div>
                    
                </div>

                <div className='experience'>
                    <div className='header'>
                        <FontAwesomeIcon className = 'icon' icon= {faCrow} />
                        <h2>Graduate Research Assistant</h2>
                    </div>
                    <div className='biography'>NYU Langone, Neuroscience Institute, Long Laboratory (2023-2024)</div>
                </div>

                <div className='experience'>
                    <div className='header'>
                        <FontAwesomeIcon className = 'icon' icon= {faChartLine} />
                        <h2>Graduate Teaching Assistant</h2>
                    </div>
                    <div className='biography'>NYU Tandon, Department of Biomedical Engineering (2023)</div>
                    
                </div>

                <div className='experience'>
                    <div className='header'>
                        <FontAwesomeIcon className = 'icon' icon= {faBrain} />
                        <h2>Lab Technician</h2>
                    </div>
                    <div className='biography'>University of Oregon, Institute of Neuroscience, Smear Lab (2020-2022)</div>
                </div>

                <div className='experience'>
                    <div className='header'>
                        <FontAwesomeIcon className = 'icon' icon= {faSyringe} />
                        <h2>Undergraduate Research Assistant</h2>
                    </div>
                    <div className='biography'>University of Oregon, Institute of Neuroscience, Smear Lab (2018-2020)</div>
                </div>

            
            </div>
        </>
    )
}

export default Experience