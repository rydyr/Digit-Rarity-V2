import './button.css';

const MyButton = ({ onCalculate }) => {
return(
  <div>
    <button className="myButton" onClick={onCalculate} onTouchEnd={onCalculate} >Prove Your Rarity</button>
  </div>
);
}

export default MyButton;