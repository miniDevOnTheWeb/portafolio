import { MdiFacebook, MdiWhatsapp, MynauiTelephone, TablerMail } from "../components/Icons";

export function ContactPage() {
    return (
        <div className="section-page" id="contact">
            <div className="contact-page">
                <h3>Formas de contacto</h3>
                <ul className="contacts-list">
                    <li className="contact-way">
                        <a href="https://www.facebook.com/profile.php?id=61587177126579"><MdiFacebook width={24} /> Diego Alexander Cornejo Menjivar</a>
                    </li>
                    <li className="contact-way">
                        <a href="https://wa.me/50377905714"><MdiWhatsapp width={24} /> +503 7790-5714</a>
                    </li>
                    <li className="contact-way">
                        <a href="tel:+50377905714"><MynauiTelephone width={24} /> +503 7790-5714</a>
                    </li>
                    <li className="contact-way">
                        <a href="mailto:diegocornejo958@gmail.com"><TablerMail width={24} /> diegocornejo958@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}