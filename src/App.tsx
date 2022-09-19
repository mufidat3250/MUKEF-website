import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import News from "./Pages/News";
import ProfilePage from "./Pages/ProfilePage";
import Projects from "./Pages/Projects";
import Support from "./Pages/SupportPage";
import TransactionPage from "./Pages/TransactionPage";
function App() {
  return (
   
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path='/dashboard/profile' element={<ProfilePage />}/>
        <Route path='/dashboard/support-project' element={<Support/>}/>
        <Route path='/dashboard/transactions' element={<TransactionPage/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
