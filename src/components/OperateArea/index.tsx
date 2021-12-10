import React from 'react'

import { List, ListItem, ListIcon, Text } from '@chakra-ui/react'
import { RiPlayFill } from 'react-icons/ri'
import { ItemOfList } from './ItemOfList'

export function OperateArea() {
  return (
    <>
      <List>
        <ListItem>
          <ItemOfList description='Motion Graphics' Icon={RiPlayFill}/>
        </ListItem>
        <ListItem>
          <ItemOfList description='Institucionais'  Icon={RiPlayFill}/>
        </ListItem>
        <ListItem>
          <ItemOfList description='Documentários'  Icon={RiPlayFill}/>
        </ListItem>
        <ListItem>
          <ItemOfList description='Campanhas políticas'  Icon={RiPlayFill}/>
        </ListItem>
        <ListItem>
          <ItemOfList description='Eventos'  Icon={RiPlayFill}/>
        </ListItem>
        <ListItem>
          <ItemOfList description='Lives'  Icon={RiPlayFill}/>
        </ListItem>
      </List>    
    </>    
  )
}