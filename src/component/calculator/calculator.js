import "./calculator.css";
import { useState } from "react";
// 연산자
export default function Calculator() {
  let [num, setNum] = useState("");
  const [oper, setOper] = useState(null);
  const [calcResult, setCalcResult] = useState(null);

  const setNumBtn = (num) => {
    setNum = (prevNum) => prevNum + num;
  };
  // 버튼이 숫자를 보내면 숫자 뒤에 받아온 숫자를 붙이는 콜백

  const setOperBtn = (oper) => {
    setCalcResult(num);
    setOper(oper);
    setNum("");
  };
  // 1. 이전값을 저장 2. 연산자 받아와서 저장 3. 연산자 초기화
  let result;
  const calculateResult = () =>
  {switch (oper) {
    case "+":
      result = parseFloat(calcResult) + parseFloat(num);
      break;
    case "-":
      result = parseFloat(calcResult) - parseFloat(num);
      break;
    case "X":
      result = parseFloat(calcResult) * parseFloat(num);
      break;
    case "+":
      if (num !== 0) result = parseFloat(calcResult) / parseFloat(num);
      break;
    default:
      break;
  }
  setCalcResult(result.Tostring());
  // 결과 저장하는

  }
  // 저장된 이전 값과 받아온 연산자에 해당하는 연산 시작
  const allClear = () => {
    setNum("");
    setOper(null);
    setCalcResult("");
  };
  // All Clear 콜백함수
  return (
    <div className="wrapper">
      <div className="calc-result-display">{result || num || 0}</div>
      <div className="calc">
        <button className="calc-oper-btn" onClick={() => setOperBtn("÷")}>
          ÷
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("X")}>
          X
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("-")}>
          -
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("+")}>
          +
        </button>
        <button className="calc-oper-btn" onClick={allClear}>
          AC
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("7")}>
          7
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("8")}>
          8
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("9")}>
          9
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("4")}>
          4
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("5")}>
          5
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("6")}>
          6
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("1")}>
          1
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("2")}>
          2
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("3")}>
          3
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          empty
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn(".")}>
          .
        </button>
        <button className="calc-num-btn" onClick={() => setNumBtn("0")}>
          0
        </button>
        <button className="calc-oper-btn" onClick={() => setOperBtn("")}>
          &lt;
        </button>
        <button className="calc-result-btn" onClick={() => setOperBtn("=")}>
          =
        </button>
      </div>
    </div>
  );
}
