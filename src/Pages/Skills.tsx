import { DeviconPlainAngular, DeviconPlainJava, DeviconPlainMysql, DeviconPlainSpring, DeviconPlainTypescript, Fa7BrandsNodeJs, KubernetesIcon, LineiconsPython, MdiDocker, MdiGit, MdiReact, PiconCss, PiconHtml, SimpleIconsExpress, SimpleIconsJavascript, SimpleIconsMariadb, SupabaseIcon } from "../components/Icons";

export function SkillsPage() {
    return (
        <div className="section-page" id="skills">
            <div className="skills-layout">
                <h3>Habilidades</h3>
                <div className="skills-group-container">
                    <div className="skill-group">
                        <h4>Lenguajes</h4>
                        <ul className="skills-list">
                            <li className="skill"><PiconHtml width={20} /> HTML</li>
                            <li className="skill"><PiconCss width={20} /> CSS</li>
                            <li className="skill"><SimpleIconsJavascript width={20} /> JavaScript</li>
                            <li className="skill"><DeviconPlainTypescript width={20} /> TypeScript</li>
                            <li className="skill"><DeviconPlainJava width={20} /> Java</li>
                            <li className="skill"><LineiconsPython width={20} /> Python</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h4>Frameworks</h4>
                        <ul className="skills-list">
                            <li className="skill"><DeviconPlainAngular width={20} /> Angular</li>
                            <li className="skill"><DeviconPlainSpring width={20} /> Spring</li>
                            <li className="skill"><SimpleIconsExpress width={20} /> Express</li>
                        </ul>
                    </div>

                    <div className="skill-group">
                        <h4>Librerías</h4>
                        <ul className="skills-list">
                            <li className="skill"><MdiReact width={20} /> React</li>
                            <li className="skill"><Fa7BrandsNodeJs width={20} /> Node.js</li>
                        </ul>
                    </div>
                    <div className="skill-group">
                        <h4>DB y Otros</h4>
                        <ul className="skills-list">
                            <li className="skill"><DeviconPlainMysql width={20} /> MySQL</li>
                            <li className="skill"><SimpleIconsMariadb width={20} /> MariaDB</li>
                            <li className="skill"><MdiDocker width={20} /> Docker</li>
                            <li className="skill"><MdiGit width={20} /> Git</li>
                            <li className="skill"><KubernetesIcon width={15} /> Kubernetes</li>
                            <li className="skill"><SupabaseIcon width={11} /> Supabase</li>
                        </ul>
                    </div>
                </div>
                <a href="#mejorado" className="link">Revisa con mas detalles mis habilidades aqui</a>
            </div>
        </div>
    )
}