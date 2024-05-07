
import './App.css';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import {BrowserRouter ,Route,Routes}from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer';
function App() {
  return (<div className='App'>
<BrowserRouter>
  
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
 
  </div>
  
  );
  
}

export default App;
