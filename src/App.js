import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './Pages/LoginPage';
import ChatPage from './Pages/ChatPage';
import PasswordRecoveryPage from './Pages/PasswordRecoveryPage';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
      
      <>
        <BrowserRouter>
          <Routes>
              
              <Route path="/" element={<LoginPage/>}>
                <Route path="chat" element={<ChatPage/>} />
                <Route path="password_recovery" element={<PasswordRecoveryPage/>} />
                <Route path="sign_up" element={<SignUpPage/>} />
              </Route>
          </Routes>
        </BrowserRouter>
          
      </>
       
  );
}

export default App;
