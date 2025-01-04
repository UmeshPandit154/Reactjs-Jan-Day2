
// Single Line Comment me kuch bhi likh sakta hu
//1. Import Area
// import something from somelibrary/somelocation
import logo from './logo.svg';
import logo2 from './downloading.png';
import './App.css';

//2. Function defination Area
function App() {
  //Every Function return something
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} />
    </div>
  );
}

//3. Export Area
export default App;
