import './styles/App.css'

import Header from './components/components_Header/Header'
import About from './components/components_About/About'
import Project from './components/components_Project/Project'
import Contract from './components/components_Contract/Contract'
import Footer from './components/components_Footer/Footer'

function App() {

  return (
    <>

      <div className = 'container'>
        <div>
          <Header/>
          <About/>
          <Project/>
          <Contract/>
          <Footer/>
        </div>
      </div>

    </>
  )
}

export default App
