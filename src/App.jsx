import { Toaster } from 'react-hot-toast';
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Headroom from 'react-headroom';

function App() {
 

  return (
    <>
    <Headroom style={{ zIndex: 100 }}>
    <Header/>
    </Headroom>
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
