import {useState} from 'react'
import NYU from './icons/nyu.png'
import UO from './icons/uo.jpg'
import Python from './icons/python.png'
import C from './icons/C.png'
import Cplus from './icons/Cplus.png'
import MATLAB from './icons/matlab.png'
import JS from './icons/JS.png'
import R from './icons/R.png'

function Biography() {
    return (
        <>
            <div > 
                <div>
                    <h2>About me:</h2>
                    <p className='biography'>
                        I am a published researcher and R&amp;D engineer with a strong technical background in digital signal processing.
                        This has formed the basis of my work in real-time embedded systems, deep learning, and image/audio segmentation. My expertise includes the application of
                        advanced signal processing techniques such as the Fourier, Hilbert, and Wavelet Transforms for analysis of non-stationary signals.
                    </p>   
                    <p className='biography'> 
                        My current research interests include the application of the wavelet transform for performing denoising and feature extraction on medical
                        and satellite imagery, alongside STM32-based embedded machine learning for image classification tasks. 
                    </p>

                    <p className='biography'>
                        I am an avid learner who enjoys designing and prototyping custom PCB designs, studying foreign languages, and practicing guitar in my spare time. 
                    </p>
                </div>

                <div className='programming_container'>
                    <h2>Languages:</h2>
                    <div className='programming'>
                        
                        <ul>
                            <li>
                                <img src={Python} alt="python" 
                                    className='programming_icon' />
                            </li>
                            <li>
                                <img src={C} alt="C" 
                                    className='programming_icon' />
                            </li>
                            <li>
                                <img src={Cplus} alt="c++" 
                                    className='programming_icon' />
                            </li>
                            <li>
                                <img src={MATLAB} alt="matlab" 
                                    className='programming_icon' />
                            </li>
                            <li>
                                <img src={JS} alt="javascript" 
                                    className='programming_icon' />
                            </li>
                            <li>
                                <img src={R} alt="r" 
                                    className='programming_icon' />
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='education'>
                    <h2>Education:</h2>
                    <ul>
                        <li>
                            <img src={NYU} alt="nyu" 
                            className='education_icon' />
                            <div className='education_text'>
                                <div>
                                    M.S. Biomedical Engineering, 2022-2024
                                </div>
                                <div>
                                    New York University
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={UO} alt="uo" 
                            className='education_icon' />
                            <div className='education_text'>
                                <div>
                                    B.S. Biology, Psychology, 2015-2020
                                </div>
                                <div>
                                    University of Oregon
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Biography