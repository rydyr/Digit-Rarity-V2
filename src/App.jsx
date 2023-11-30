import './App.css'
import React, { useState } from 'react';
import Input from '../components/input.jsx';


export default function App() {
  const [input, setInput] = useState('');

  const handleChange = (newInput) => {
    setInput(newInput);
  }
  
  return (
    <main>
      <h1>Digit Rarity</h1>
      <div className="subTitle">
        <h3 className="enter" >Enter Your Digit</h3>
        <h3 className="version" >V.2</h3>
      </div>
      <Input value={input} onChange={handleChange} />
    </main>
  )
}
