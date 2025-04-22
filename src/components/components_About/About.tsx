import './styles_About/About.css'

import About_Personal from './About_Personal';
import About_Education from './About_Education';
import About_WorkExperience from './About_WorkExperience';
import About_Skill from './About_Skill';
import About_Objective from './About_Objective';

function About() {
    return <div>
        <div>
            <About_Personal/>
            <About_Education/>
            <About_WorkExperience/>
            <About_Objective/>
            <About_Skill/>
        </div>
    </div>
}

export default About ;