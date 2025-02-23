import { useState } from 'react';
import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App(props){
  const [mode, setMode] = useState('light');// tells whether dark mode is enable or not

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },2000);
  }
   const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'; 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
return (
  <>
  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}
  aboutText="About TextUtils"/> 
 <Alert alert={alert}/>
  <div className="container my-3">
    {/* <Routes>
      <Route exact path="/about" element ={<About/>}>
      </Route>  */}
      {/* <Route exact path="/" */}
       <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} />
      {/* </Route>
      </Routes> */}
    </div>
    {/* </Router> */}



</>
  );
}

export default App;