import Register from './page/Register'
import Home from './page/Home';
import Login from './page/Login';
import './style.scss'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" /> 
    }
    return children
  }
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectRoute>
             <Home />
            </ProtectRoute>
           } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register /> }/>
        </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
