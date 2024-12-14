import './calculator.css'

export default function Calculator() {
  return (
    <div className="calc">
      <div className="calc-result"></div>
      <div className="calc-row">
        <button className="calc-btn">÷</button>
        <button className="calc-btn">X</button>
        <button className="calc-btn">-</button>
        <button className="calc-btn">+</button>
        <button className="calc-btn">empty</button>
      </div>
      <div className="calc-row">
        <button className="calc-btn">empty</button>
        <button className="calc-btn">7</button>
        <button className="calc-btn">8</button>
        <button className="calc-btn">9</button>
        <button className="calc-btn">empty</button>
      </div>
      <div className="calc-row">
        <button className="calc-btn">empty</button>
        <button className="calc-btn">4</button>
        <button className="calc-btn">5</button>
        <button className="calc-btn">6</button>
        <button className="calc-btn">empty</button>
      </div>
      <div className="calc-row">
        <button className="calc-btn">empty</button>
        <button className="calc-btn">1</button>
        <button className="calc-btn">2</button>
        <button className="calc-btn">3</button>
        <button className="calc-btn">empty</button>
      </div>
      <div className="calc-row">
        <button className="calc-btn">empty</button>
        <button className="calc-btn">.</button>
        <button className="calc-btn">0</button>
        <button className="calc-btn">&lt;</button>
        <button className="calc-btn">=</button>
      </div>
    </div>
  );
}
