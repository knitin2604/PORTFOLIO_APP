
import './App.css';
import Nav from './Nav.js';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";






function App() {
  return (
    <div className="App">
      
       <Nav/>
       <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
     
  );
}

export default App;
