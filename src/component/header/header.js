import './header.css'
export default function Header() {
  return(
    <div className="header">
      <button className="hamburger-menu"><img src="../asset/image/hamburger-icon.png" alt='hamburger-menu'/>
      </button>
      <h1>계산기</h1>
      <button className="info-btn">?</button>
    </div>
  )
}