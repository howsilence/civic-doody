import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Map from './components/Map';
import LocationForm from './components/LocationForm';
// import MapContainer from './components/MapContainer';

function App() {
  //test code making sure our server and client are talking
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  
  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LocationForm />
      <Map />
      
    </div>
  );
}

export default App;
