import { RobotAnimation } from "../components/RobotAnimation";

export function WelcomePage() {
    return (
        <div className="section-page" id="welcome-section">
            <div className="name-container">
                <h1 className="my-name">Diego Alexander Cornejo Menjivar</h1>
                <RobotAnimation />
            </div>
            <div className="welcome-data">
                <img className="profile-image" src="https://imgs.search.brave.com/P05weB7LoDFsyRDuUAttGeB81XHHx6anR-aDzviJjN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTc0NDYvMTc0/NDY4MzMucG5n" alt="profile image" />
                <p className="welcome-text">
                    Mucho gusto, mi nombre es Diego Alexander Cornejo Menjivar, un desarrollador de software, apasionado de crear soluciones innovadoras y eficientes para los usuarios que necesitan resolver problemas cotidianos, me encantaria tener la oportunidad de ser parte de un grupo de desarrolladores en una empresa ya que, me ayudaria a crecer como desarrollador y adquirir la experiencia que solamente se puede lograr viviendo en el mundo real del software.
                    Actualmente no poseo experiencia laboral en el mundo del software, pero lo que busco es la oportunidad de mostrar mis conocimientos y habilidades que se que confio en que son bastantes, te invito a que evalues mis <a href="#skills" className="link">conocimientos y habilidades</a>.
                </p>
            </div>
        </div>
    )
}