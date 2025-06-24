import React, { useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContect';
function Toggler() {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  return (
    <div>
        <button onClick={()=>setDarkMode(!darkMode)}>
            {darkMode? 'Light':'Dark'}
        </button>
    </div>
  )
}

export default Toggler