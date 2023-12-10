import * as DRM from '../index.js';
import React, { useState } from "react";
import Input from "../components/input.jsx";
import MyButton from "../components/button.jsx";
import Result from "../components/result.jsx";
import "../components/input.css";
import "../components/button.css";
import "../components/result.css";
import "./App.css";

export default function App() {
  const rotArr = [0, 1, 6, 8, 9];
  const perArr = [0, 6, 8, 9];
  const [input, setInput] = useState("");
  const [result, setResult] = useState({
    length: 0,
    palindrome: false,
    ambigram: false,
    strobogrammatic: false,
    perfectprint: false,
    fourtwenty: false,
    sixtynine: false,
    prime: false,
    sequentialAsc: false,
    sequentialDsc: false,
  });

  const handleChange = (newInput) => {
    setInput(newInput);
  };

  const calculateResults = () => {
    const num = Number(input);
    setResult({
      length: input.length,
      palindrome: DRM.Palindrome(input),
      ambigram: DRM.RotationChecker(input, rotArr, DRM.AmbHelper),
      strobogrammatic: DRM.RotationChecker(input, rotArr, DRM.StrHelper),
      perfectprint: DRM.RotationChecker(input, perArr, DRM.PerHelper),
      fourtwenty: DRM.Has420(input),
      sixtynine: DRM.Has69(input),
      prime: DRM.IsPrime(num),
      sequentialAsc: DRM.Sequential(input, "asc"),
      sequentialDsc: DRM.Sequential(input, "dsc"),
    });
  };

  return (
    <main>
      <h1>Digit Rarity</h1>
      <div className="subTitle">
        <h3 className="enter">Enter Your Digit</h3>
        <h3 className="version">V.2</h3>
      </div>
      <Input value={input} onChange={handleChange} />
      <MyButton className="myButton" onCalculate={calculateResults} />
      <Result
        type="Length"
        isTrue={result.length}
        charLen={result.length}
        length={result.length}
      />
      <Result
        type="palindrome"
        isTrue={result.palindrome}
        length={result.length}
      />
      <Result type="ambigram" isTrue={result.ambigram} length={result.length} />
      <Result
        type="strobogrammatic"
        isTrue={result.strobogrammatic}
        length={result.length}
      />
      <Result
        type="perfectprint"
        isTrue={result.perfectprint}
        length={result.length}
      />
      <Result
        type="fourtwenty"
        isTrue={result.fourtwenty}
        length={result.length}
      />
      <Result
        type="sixtynine"
        isTrue={result.sixtynine}
        length={result.length}
      />
      <Result type="prime" isTrue={result.prime} length={result.length} />
      <Result
        type="sequentialAsc"
        isTrue={result.sequentialAsc}
        length={result.length}
      />
      <Result
        type="sequentialDsc"
        isTrue={result.sequentialDsc}
        length={result.length}
      />
    </main>
  );
}
