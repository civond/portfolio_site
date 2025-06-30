import {useState} from 'react'
import Descriptions from './descriptions.json'
import Budgie from './images/budgie.jpeg'
import Ecg_denoising from './images/ECG_Wavelet.png'
import Plant from './images/plant.png'
import Xray from './images/Xray.jpg'
import ECG from './images/ECG.png'
import FMON from './images/trajectory.png'

function Projects() {

    const [activeProject, setActiveProject] = useState(0);
    return (
        <>
            <div className='projects'>
                <div className='button_container' >
                    <div onClick={() => {
                        setActiveProject(0);
                        console.log("active project:", 0);}}
                        className={`tab ${activeProject === 0 ? "button_active" : "button_inactive"}`}>
                        Budgie Audio Segmentation
                    </div>

                    <div onClick={() => {
                        setActiveProject(1);
                        console.log("active project:", 1);}}
                        className={`tab ${activeProject === 1 ? "button_active" : "button_inactive"}`}>
                        ECG Denoising
                    </div>

                    <div onClick={() => {
                        setActiveProject(2);
                        console.log("active project:", 2);}}
                        className={`tab ${activeProject === 2 ? "button_active" : "button_inactive"}`}>
                        Plant Monitoring
                    </div>

                    <div onClick={() => {
                        setActiveProject(3);
                        console.log("active project:", 3);}}
                        className={`tab ${activeProject === 3 ? "button_active" : "button_inactive"}`}>
                        X-RAY Classification
                    </div>

                    <div onClick={() => {
                        setActiveProject(4);
                        console.log("active project:", 4);}}
                        className={`tab ${activeProject === 4 ? "button_active" : "button_inactive"}`}>
                        ECG Monitoring
                    </div>

                    <div onClick={() => {
                        setActiveProject(5);
                        console.log("active project:", 5);}}
                        className={`tab ${activeProject === 5 ? "button_active" : "button_inactive"}`}>
                        Position Tracking
                    </div>

                </div>

                <div className='button_content'>
                    {activeProject === 0 && (
                    <>
                        <h2><a href={Descriptions['budgie'][0].link}>{Descriptions['budgie'][0].title}</a></h2>
                        <div className='text'>{Descriptions['budgie'][0].text}</div>
                        <img src={Budgie} alt={Descriptions['budgie'][0].alttext}></img>
                    </>
                    )}
                    {activeProject === 1 && (
                    <>
                        <h2><a href={Descriptions['ecg_denoising'][0].link}>{Descriptions['ecg_denoising'][0].title}</a></h2>
                        <div className='text'>{Descriptions['ecg_denoising'][0].text}</div>
                        <img src={Ecg_denoising} alt={Descriptions['ecg_denoising'][0].alttext}></img>
                    </>
                    )}
                    {activeProject === 2 && (
                    <>
                        <h2><a href={Descriptions['plant'][0].link}>{Descriptions['plant'][0].title}</a></h2>
                        <div className='text'>{Descriptions['plant'][0].text}</div>
                        <img src={Plant} alt={Descriptions['plant'][0].alttext}></img>
                    </>
                    )}
                    {activeProject === 3 && (
                    <>
                        <h2><a href={Descriptions['xray'][0].link}>{Descriptions['xray'][0].title}</a></h2>
                        <div className='text'>{Descriptions['xray'][0].text}</div>
                        <img src={Xray} alt={Descriptions['xray'][0].alttext}></img>
                    </>
                    )}
                    {activeProject === 4 && (
                    <>
                        <h2><a href={Descriptions['ecg_monitoring'][0].link}>{Descriptions['ecg_monitoring'][0].title}</a></h2>
                        <div className='text'>{Descriptions['ecg_monitoring'][0].text}</div>
                        <img src={ECG} alt={Descriptions['ecg_monitoring'][0].alttext}></img >
                    </>
                    )}
                    {activeProject === 5 && (
                    <>
                        <h2><a href={Descriptions['fmon'][0].link}>{Descriptions['fmon'][0].title}</a></h2>
                        <div className='text'>{Descriptions['fmon'][0].text}</div>
                        <img src={FMON} alt={Descriptions['fmon'][0].alttext}></img >
                    </>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default Projects