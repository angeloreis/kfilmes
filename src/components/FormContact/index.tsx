import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaPaperPlane } from 'react-icons/fa'

import styles from './styles.module.scss'
import { Console } from 'console'
export const FormContact = () => {
    const [username, setUserName] = useState('');
    const [phonewhats, setPhoneWhats] = useState('');
    const [textContact, setTextContact] = useState('');
    const [whatsAppUrl, setWhatsAppUrl] = useState('');

    const router = useRouter();

    function handleSubmit() {        
        const msgZap = `${textContact}. Meu contato é este: ${phonewhats} - ${username} - Contato direto do site!`;
        setWhatsAppUrl(`https://wa.me/559188497692?text=${msgZap}`);        
    }

    useEffect(()=>{
        router.push(whatsAppUrl);
    },[whatsAppUrl])

    return (
        <form className={styles.ContainerForm} onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Informe seu nome completo"
                required={true}
                onChange={(event) => setUserName(event.target.value)}
                />
                <input
                type="text"
                placeholder="WhatsApp: (99) 9.9999-9999"                
                required={true}
                onChange={(event) => setPhoneWhats(event.target.value)}
                />
                <input
                type="text"
                placeholder="Digite aqui seu texto"
                required={true}
                onChange={(event) => setTextContact(event.target.value)}
                />
                <button type="submit">Enviar <FaPaperPlane/></button>
        </form>
    );
}