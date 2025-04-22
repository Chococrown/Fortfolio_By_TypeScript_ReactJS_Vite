import html5 from './icons/skill/HTML.svg'
import css from './icons/skill/CSS.svg'
import javaScript from'./icons/skill/JavaScript.svg'
import typeScript from './icons/skill/TypeScript.svg'
import react from './icons/skill/React.svg'
import vsCode from './icons/skill/VSCode.svg'
import git from './icons/skill/Git.svg'
import gitHub from './icons/skill/Github.svg'


function About_Skill() {
    return <div>

        <h2>💻  ทักษะด้านเทคนิค</h2>
        
        <br/>

        <h3> Frontend </h3>

        <br/>

        <div className='about__img__skill'>

            <div>
                <img 
                src = {html5}
                alt = "HTML" />
                <p>HTML</p>
            </div>

            <div>
                <img 
                src = {css}
                alt = "CSS" />
                <p>CSS</p>
            </div>

            <div>
                <img 
                src = {javaScript}
                alt = "Java Script" />
                <p>Java Script</p>
            </div>

            <div>
                <img 
                src = {typeScript}
                alt = "TypeScript" />
                <p>TypeScript</p>
            </div>

        </div>

        <br/>

        <h3> Framework & Library </h3>

        <br/>

        <div className='about__img__skill'>

            <div>
                <img 
                src = {react}
                alt = "React.JS" />
                <p>React.JS</p>
            </div>

        </div>

        <br/>

        <h3> เครื่องมือพัฒนา </h3>

        <br/>

        <div className='about__img__skill'>

            <div>
                <img 
                src = {vsCode}
                alt = "Visual Studio Code" />
                <p>VS Code</p>
            </div>

            <div>
                <img 
                src = {git}
                alt = "Git" />
                <p>Git</p>
            </div>

            <div>
                <img 
                src = {gitHub}
                alt = "GitHub" />
                <p>GitHub</p>
            </div>

        </div>

        <br/>

        <h3> แนวทางการพัฒนา </h3>

        <br/>

        <div>Responsive Web Design , Component-Based Architecture</div>

        <br/>
        <hr/>
        <br/>

    </div>




}

export default About_Skill ;