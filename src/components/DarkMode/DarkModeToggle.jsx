import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className='btn__dlmode'>
      {
        darkMode 
          ? 
          <ion-icon name="sunny-outline"></ion-icon>
          : 
          <ion-icon name="moon-outline"></ion-icon>
      }
    </button>
  );
};

export default DarkModeToggle;
