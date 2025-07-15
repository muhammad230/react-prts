import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Table from './component/table';
import ColorChanger from './component/Btncolor';
import Color from './component/color'; // Fixed

function App() {
  return (
    <>
      <Header />
      <Table />
      <ColorChanger />
      <Color />  
    </>
  );
}

export default App;
