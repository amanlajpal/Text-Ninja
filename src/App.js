import './App.css';
import Navbar from './components/Navbar';
import TextForm2 from './components/TextForm2';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const body = document.getElementsByTagName('body')[0]

function App() {
  const [toggle, settoggle] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }

  const onToggleMode = () => {
    body.classList.toggle('bg-dark')
    body.classList.toggle('text-light')
    if (body.classList.contains('bg-dark')) {
      settoggle("Disable Dark Mode")
      showAlert('Dark mode enabled.', 'success')
    }
    else {
      settoggle("Enable Dark Mode")
      showAlert('Dark mode disabled.', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title='Text Utils' mode={toggle} toggleMode={onToggleMode} />
        <Alert alert={alert} />
        {/* <TextForm heading="Enter the text to analyze" />*/}
        <Routes>
          <Route exact path="/" element={<TextForm2 heading="Text Modifier" showAlert={showAlert} />}>
          </Route>
          <Route exact path="about" element={<About />} /><Route/>
        </Routes>
      </Router>
    </>
  );
}

export default App;


