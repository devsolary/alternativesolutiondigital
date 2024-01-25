import './App.css';
import Home from "./Home.js"
import About from "./About.js"
import Navbar from './Navbar.js';
import Contact from "./Contact.js"
import Whyus from "./Whyus.js"
import Support from "./Support.js"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin.js';
import AdminDashboard from './AdminDashboard.js';
import { AuthContext } from "./AuthContext.js"
import { useContext } from 'react';
import AddSubscriber from './AddSubscriber.js';

function App() {

 

  const {currentUser} = useContext(AuthContext)



  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/"/>;
  }

  console.log(currentUser)
  return (
    <Router>
      <div className="App">
        <Navbar /> 
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Whyus" element={<Whyus />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<RequireAuth><AdminDashboard /></RequireAuth> } />
        <Route path="/AddSubscriber" element={<RequireAuth><AddSubscriber /></RequireAuth>} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
