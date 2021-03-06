import './App.css';
import Navbar from './components/Navbar';
import TextForm2 from './components/TextForm2';
import React, { useEffect, useState } from 'react'
import Alert from './components/Alert';



const body = document.getElementsByTagName('body')[0]
function App() {
  const [toggle, settoggle] = useState(localStorage.getItem('mode') === 'bg-dark' ? 'Disable Dark Mode' : 'Enable Dark Mode')
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
  useEffect(() => {
    body.classList.toggle(localStorage.getItem('mode') === 'bg-dark' ? 'bg-dark' : 'bg-white')
    body.classList.toggle(localStorage.getItem('mode') === 'bg-dark' ? 'text-light' : 'text-dark')
  }, []);

  const onToggleMode = () => {
    if (body.classList.contains('bg-dark')) {
      body.classList.remove('bg-dark')
      body.classList.remove('text-light')
      body.classList.add('bg-white')
      body.classList.add('text-dark')
      showAlert('Dark mode disabled.', 'success')
      settoggle("Enable Dark Mode")
      localStorage.setItem('mode', 'bg-white')
    }
    else {
      body.classList.remove('bg-white')
      body.classList.remove('text-dark')
      body.classList.add('bg-dark')
      body.classList.add('text-light')
      showAlert('Dark mode enabled.', 'success')
      settoggle("Disable Dark Mode")
      localStorage.setItem('mode', 'bg-dark')
    }
  }

  return (
    <>
      <Navbar title='Text Ninja' modeText={toggle} toggleMode={onToggleMode} />
      <div className='alert-box'>
        <Alert alert={alert} />
      </div>
      <TextForm2 heading="Text Ninja Modifiers" showAlert={showAlert} />
    </>
  );
}

export default App;


