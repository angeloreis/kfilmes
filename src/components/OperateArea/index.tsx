import React from "react";

import { Flex, List, ListItem, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiPlayFill } from "react-icons/ri";

import { ItemOfList } from "./ItemOfList";

export function OperateArea() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Flex direction="column" align='flex-start' py='6'>
      <List>
        <ListItem>
          <ItemOfList description="Motion Graphics" Icon={RiPlayFill} colorIcon='red'/>
        </ListItem>
        <ListItem>
          <ItemOfList description="Institucionais" Icon={RiPlayFill} colorIcon='red' />
        </ListItem>
        <ListItem>
          <ItemOfList description="Documentários" Icon={RiPlayFill} colorIcon='red' />
        </ListItem>
        <ListItem>
          <ItemOfList description="Campanhas políticas" Icon={RiPlayFill} colorIcon='red' />
        </ListItem>
        <ListItem>
          <ItemOfList description="Eventos" Icon={RiPlayFill} colorIcon='red' />
        </ListItem>
        <ListItem>
          <ItemOfList description="Lives" Icon={RiPlayFill}  colorIcon='red'/>
        </ListItem>
      </List>
    </Flex>
    </>    
  );
}
