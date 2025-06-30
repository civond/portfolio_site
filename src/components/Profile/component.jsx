import {useState} from 'react'
import ProfilePic from './assets/profile.jpeg'
import Links from './links.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './index.scss'

function Profile() {

    return (
        <>
        
        <div id="profile_container">
            <div>
                <img src={ProfilePic} alt="profile pic"></img>
            </div>

            <div className='name'>
                <h2>DORIAN YEH</h2>
            </div>

            <div className='title'>
                R&amp;D ENGINEER
            </div>
            
            
            <div className='icon_container'>
                <ul>
                    <li>
                        <a target = "_blank" rel="noreferrer" href= {Links['Resume']} >
                            <div className='button_wrapper'>
                                    <FontAwesomeIcon icon= {faFile} />
                            </div> 
                        </a>
                    </li>
                    <li>
                        <a target = "_blank" rel="noreferrer" href= {Links['Github']} >
                            <div className='button_wrapper'>
                                    <FontAwesomeIcon icon= {faGithub} />
                            </div> 
                        </a>
                    </li>
                    <li>
                        <a target = "_blank" rel="noreferrer" href= {Links['Linkedin']} >
                            <div className='button_wrapper'>
                                    <FontAwesomeIcon icon= {faLinkedin} />
                            </div> 
                        </a>
                    </li>

                </ul>
            </div>

         
        </div>

        

        
        </>
    )
}

export default Profile