import './App.css';
import "./Responsive/Responsive.css";
import Home from './Home/Home';
import About from './Home/Contact/About/About';
import Contact from './Home/Contact/Contact';
import Galry from './Home/Contact/About/Galry/Galry';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ShowContent from "./show_content_books/ShowContent";
import StatesContext from './contextAPI/StatesContext';


function App() {
  return (
    <StatesContext>
    <Router basename='/'>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/galry' element ={<Galry/>} />
        <Route path='/book/*' element ={<ShowContent/>} />
      </Routes>
    </Router>
    </StatesContext>
  );
}
export default App;
