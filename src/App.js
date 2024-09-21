
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Layout from './component/Layout';
import Connexion from './component/Login';
import SignIn from './component/SignIn';
import SideBar from './component/Sidebar';
import TopBar from './component/TopBar';
import MessageSection from './component/MessageSection';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route>
        
          
          <Route path="/" element={<Connexion />} />
          <Route path="/MessageSection" element={<MessageSection />} />*
          
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/TopBar" element={<TopBar />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
