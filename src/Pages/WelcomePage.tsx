import { RobotAnimation } from "../components/RobotAnimation";

export function WelcomePage() {
    return (
        <div className="section-page" id="welcome-section">
            <div className="name-container">
                <h1 className="my-name">Diego Alexander Cornejo Menjivar</h1>
                <RobotAnimation />
            </div>
            <div className="welcome-data">
                <img className="profile-image" src="/myphoto.png" />
                <p className="welcome-text">
                    Mucho gusto, mi nombre es Diego Alexander Cornejo Menjivar, un desarrollador de software, apasionado de crear soluciones innovadoras y eficientes para los usuarios que necesitan resolver problemas cotidianos, me encantaria tener la oportunidad de ser parte de un grupo de desarrolladores en una empresa ya que, me ayudaria a crecer como desarrollador y adquirir la experiencia que solamente se puede lograr viviendo en medio de el mundo real del software.
                    Actualmente no poseo experiencia laboral, pero lo que busco es la oportunidad de mostrar mis conocimientos y habilidades que confio en que me hacen un buen candidato a su empresa, te invito a que evalues mis <a href="#skills" className="link">conocimientos y habilidades</a>, gracias por la oportunidad.
                </p>
            </div>
        </div>
    )
}