import { BxsContact, FluentHatGraduation12Filled, GameIconsHand, IconoirStarSolid, PixelUser } from "./Icons"

export function Navbar () {
  return (
    <nav className="nav-bar">
        <h3 className="nav-bar-name">Diexdev</h3>
        <ul className="nav-bar-list">
            <li className="nav-bar-item"><a href="#welcome-section"><GameIconsHand width={20} /> <span className="nav-bar-span">SALUDO</span></a></li>
            <li className="nav-bar-item"><a href="#personal-data-section"><PixelUser width={20} /> <span className="nav-bar-span">DATOS PERSONALES</span></a></li>
            <li className="nav-bar-item"><a href="#skills"><IconoirStarSolid width={20} /> <span className="nav-bar-span">HABILIDADES</span></a></li>
            <li className="nav-bar-item"><a href="#studies"><FluentHatGraduation12Filled width={20} /> <span className="nav-bar-span">ESTUDIOS</span></a></li>
            <li className="nav-bar-item"><a href="#contact"><BxsContact width={20} /> <span className="nav-bar-span">CONTACTO</span></a></li>
        </ul>
    </nav>
  )
}