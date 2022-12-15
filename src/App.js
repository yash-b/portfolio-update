import { 
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import ResumeSideNav from './components/ResumeSideNav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SMS from './pages/SMS';

export default function App() {
  return (
      <div className='App'>
        <ResumeSideNav/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/smsapp" element={<SMS/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
      </div>
  )  
}
