import { MdiFacebook, MdiGithub, MdiInstagram, MdiWhatsapp, MynauiTelephone, TablerMail } from "../components/Icons";

export function ContactPage() {
    return (
        <div className="section-page" id="contact">
            <div className="contact-page">
                <h3>Formas de contactarme</h3>
                <ul className="contacts-list">
                    <li className="contact-way">
                        <a href="https://www.facebook.com/Diego"><MdiFacebook width={24} /> Diego Alexander Cornejo Menjivar</a>
                    </li>
                    <li className="contact-way">
                        <a href="https://www.instagram.com/diexdev"><MdiInstagram width={24} /> diexdev</a>
                    </li>
                    <li className="contact-way">
                        <a href="https://www.whatsapp.com/"><MdiWhatsapp width={24} /> +503 7790-5714</a>
                    </li>
                    <li className="contact-way">
                        <a href="tel:+50377905714"><MynauiTelephone width={24} /> +503 7790-5714</a>
                    </li>
                    <li className="contact-way">    
                        <a href="mailto:diegocornejo958@gmail.com"><TablerMail width={24} /> diegocornejo958@gmail.com</a>
                    </li>
                    <li className="contact-way">
                        <a href="https://github.com/TheCat-codes"><MdiGithub width={24} /> TheCat-codes</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}