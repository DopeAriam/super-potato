import './App.css';
import { useEffect, useState } from 'react';
import "./App.css"

function App() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const windowOnClick = (event) => {
      if (event.target.className === "show-modal") {
        setShowModal(false);
      }
    };

    window.addEventListener("click", windowOnClick);

    return () => {
      window.removeEventListener("click", windowOnClick);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <button className="trigger" onClick={toggleModal}>Click the modal!</button>
    {showModal &&
      <div className="modal show-modal">
        <div className="modal-content">
          <span className="close-button" onClick={toggleModal}>×</span>
          <h1>Hello, I am a modal!</h1>
        </div>
      </div>
    }
  </>
  );
}

export default App;
