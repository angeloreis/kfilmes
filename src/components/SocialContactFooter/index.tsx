import {FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk, FaMapPin} from 'react-icons/fa'
import styles from './styles.module.scss'
export const SocialContactService = () => {
    return (
        <ul className={styles.sociallist}>
            <li><FaInstagram/> KFilmesOFC</li>
            <li><FaFacebook/> KFilmesOFC</li>
            <li><FaWhatsapp/> (91) 9.8849-7692 | 9.8233-4815</li>
            <li><FaMailBulk/> atendimento@kfilmes.digital</li>
            <li><FaMapPin/> Travessa Vileta, 2533 Altos, Marco, Belém-PA</li>
        </ul>
    );
}