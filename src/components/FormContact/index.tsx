import { useState } from 'react'
import styles from './styles.module.scss'
export const FormContact = () => {
    return (
        <form className={styles.ContainerForm}>
                <label>
                Nome Completo
                </label>
                <input
                type="text"
                />
                <label>
                WhatsApp 
                </label>
                <input
                type="text"
                placeholder="+55 (99) 9999-9999"                
                />
                <label>
                Assunto
                </label>                
                <input
                type=""
                placeholder="Digite aqui seu texto"
                />
                <button type="submit">Enviar</button>
        </form>
    );
}