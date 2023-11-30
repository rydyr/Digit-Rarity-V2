import ReactDOM from 'react-dom';
import {useState} from 'react';
import './result.css';
import population from '../dataobjects/population.js';
import wordifyNum from '../dataobjects/switch.js'

const Result = ({type,isTrue,length,charLen}) => {
  const len = wordifyNum(length)
  const pop = population[type][len];
  const lab = population[type]["label"];
  const desc = population[type]["description"]
  const style = {
    display: isTrue ? 'block' : 'none'
  }
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  const style2 = {
    display: isActive ? 'block' : 'none'
  }
  return ReactDOM.createPortal (
    <div className="result" style={style} onClick={handleClick}>
      <h3 className="resultTitle">{lab} &nbsp; &nbsp; {charLen}</h3>
      <div className="popBlock" style={style2}>
        <p className="popLab">Population: &nbsp; {pop}</p>
        <p className="popDes"><span className="descSpan" >Description</span><br></br>&nbsp; &nbsp; {desc}</p>
      </div>
    </div>, document.getElementById("result-portal")
  );
}
  
export default Result;