// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import {Navbar} from './components/Navbar';
import { Register } from './components/Register';
import { Todo } from './components/Todos';
// import { Signupmodal } from './components/SignupModal';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Todos" element={<Todo/>}></Route>

      </Routes>
       {/* <Navbar/>
       <Register/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
