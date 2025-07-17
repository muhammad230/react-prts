import './App.css';
import Header from './component/Header';
// import Table from './component/table';
import ColorChanger from './component/Btncolor';
import Color from './component/color';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // ✅ Use lowercase 'mode'

  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#05363b';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode is Enabled", "success");
    }
  };

  return (
    <>
      <Header toggleMode={toggleMode} /> {/* ✅ Passed toggleMode to Header */}
      {/* <Table /> */}
      {/* <ColorChanger /> */}
      <Color />
    </>
  );
}

export default App;
