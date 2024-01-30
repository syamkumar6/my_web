import { Toaster } from 'react-hot-toast';
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
 

  return (
    <>
    <Header/>
    
    <main>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </main>

    <Footer/>
    <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App
