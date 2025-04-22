import './styles/App.css'

import Header from './components/components_Header/Header'
import About from './components/components_About/About'
import Project from './components/components_Project/Project'

function App() {

  return (
    <>

      <div className = 'container'>
        <div>
          <Header/>
          <About/>
          <Project/>

        </div>
      </div>

    </>
  )
}

export default App
