import {useState} from 'react'
import Tabs from './tabs.jsx'
import Biography from './tab_content/biography.jsx'
import Experience from './tab_content/experience.jsx'
import Projects from './tab_content/projects.jsx'
import './index.scss'


function Content() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div id="content_container">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="tab-content">
                    {activeTab === 0 && <Biography />}
                    {activeTab === 1 && <Projects />}
                    {activeTab === 2 && <Experience />}
                </div>
            </div>
        </>
    )
}

export default Content