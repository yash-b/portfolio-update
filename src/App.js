import './App.css';
import ResumeSideNav from './SideNav';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Skills from './pages/Skills.js';
import Login from './pages/Login.js';
import Contact from './pages/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props, state) {
  return (
    <Router>
      
      <ResumeSideNav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={ <Navigate to='/home' /> } />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
