import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import { useState } from 'react';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');

  const [text, setText] = useState("Enable Light Mode");

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'grey'
      document.title = "Text Mainpulation App / Dark Mode";
     
    } else {
      setMode('light');
      setText('Enable Light Mode')
      document.body.style.backgroundColor = 'white'
      document.title = "Text Mainpulation App / Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar title="Practise Project" aboutText = "About Us"/> */}
      <Navbar mode={mode} toogleMode={toogleMode} text={text} />

      <Textform title="Text Area" mode={mode}  />

      {/* <About/> */}
    </>
  );
}

export default App;