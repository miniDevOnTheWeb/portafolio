export function Navbar () {
  return (
    <nav className="nav-bar">
        <h3 className="nav-bar-name">Diexdev</h3>
        <ul className="nav-bar-list">
            <li className="nav-bar-item"><a href="#welcome-section"><span>SALUDO</span></a></li>
            <li className="nav-bar-item"><a href="#personal-data-section"><span>DATOS PERSONALES</span></a></li>
            <li className="nav-bar-item"><a href="#skills"><span>HABILIDADES</span></a></li>
            <li className="nav-bar-item"><a href="#contact"><span>CONTACTO</span></a></li>
            <li className="nav-bar-item"><a href="#studies"><span>ESTUDIOS</span></a></li>
        </ul>
    </nav>
  )
}