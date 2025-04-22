import './styles/App.css'

import Header from './components/components_Header/Header'
import About from './components/components_About/About'

function App() {

  return (
    <>

      <div className = 'container'>
        <div>
          <Header/>
          <About/>

        </div>
      </div>

    </>
  )
}

export default App
