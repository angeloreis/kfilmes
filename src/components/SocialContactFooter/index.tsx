import {FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk, FaMapPin} from 'react-icons/fa'
import { List, ListItem } from "@chakra-ui/react"
import React from 'react';
import { ItemOfList } from 'components/OperateArea/ItemOfList';
export const SocialContactService = () => {
    return (
        <List>
            <ListItem><ItemOfList description='KFilmesOFC' Icon={FaInstagram}/></ListItem>
            <ListItem><ItemOfList description='KFilmesOFC'  Icon={FaFacebook}/></ListItem>
            <ListItem><ItemOfList description='(91) 9.8849-7692 | 9.8233-4815' Icon={FaWhatsapp}/></ListItem>
            <ListItem><ItemOfList description='atendimento@kfilmes.digital' Icon={FaMailBulk}/></ListItem>
            <ListItem><ItemOfList description='Travessa Vileta, 2533 Altos, Marco, Belém-PA' Icon={FaMapPin}/></ListItem>
        </List>
    );
}