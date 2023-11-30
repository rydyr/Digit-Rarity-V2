import React, {useState} from 'react';
import Result from './result';
import * as DRM from '../index.js';
import './button.css';

const MyButton = ({inputNum}) => {
  const rotArr = [0,1,6,8,9];
  const perArr = [0,6,8,9];
  const num = Number(inputNum);
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
    sequentialDsc: false})
  
  const handleClick = () => {
    setResult({
      length: inputNum.length,
      palindrome: DRM.Palindrome(inputNum),
      ambigram: DRM.RotationChecker(inputNum,rotArr,DRM.AmbHelper),
      strobogrammatic: DRM.RotationChecker(inputNum,rotArr,DRM.StrHelper),
      perfectprint: DRM.RotationChecker(inputNum,perArr,DRM.PerHelper),
      fourtwenty: DRM.Has420(inputNum),
      sixtynine: DRM.Has69(inputNum),
      prime: DRM.IsPrime(num),
      sequentialAsc: DRM.Sequential(inputNum,'asc'),
      sequentialDsc: DRM.Sequential(inputNum,'dsc')
    });
  }
return(
  <div>
    <button className="myButton" onClick={handleClick}>Prove Your Rarity</button>
    <Result type="Length" isTrue={result.length} charLen={result.length} length={result.length}/>
    <Result type="palindrome" isTrue={result.palindrome} length={result.length} />
    <Result type="ambigram" isTrue={result.ambigram} length={result.length} />
    <Result type="strobogrammatic" isTrue={result.strobogrammatic} length={result.length} />
    <Result type="perfectprint" isTrue={result.perfectprint} length={result.length} />
    <Result type="fourtwenty" isTrue={result.fourtwenty} length={result.length} />
    <Result type="sixtynine" isTrue={result.sixtynine} length={result.length} />
    <Result type="prime" isTrue={result.prime} length={result.length} />
    <Result type="sequentialAsc" isTrue={result.sequentialAsc} length={result.length} />
    <Result type="sequentialDsc" isTrue={result.sequentialDsc} length={result.length} /> 
  </div>
);
}

export default MyButton;