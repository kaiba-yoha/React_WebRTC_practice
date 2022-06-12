import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from "react"

function App() {

  // On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
};

  
  const videoRef = useRef();
  
  useEffect(() => {
    const setVideoStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      console.log('setted');
    }

    setVideoStream();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <video autoPlay ref={videoRef}>
          
        </video>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
