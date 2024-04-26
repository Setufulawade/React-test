import './App.css';
import Navbar from './components/Navbar';
import Textform1 from './components/Textform1';

function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutText='About TextUtils' />

      <div className="container my-4">
        <Textform1 heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;

