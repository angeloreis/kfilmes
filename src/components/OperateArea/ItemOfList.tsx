import {ReactNode} from 'react'

import { Text, ListIcon} from '@chakra-ui/react'


interface ItemOfListProps {
    description: string
    Icon: any
}

export function ItemOfList({description, Icon}: ItemOfListProps) {
    return (
        <Text fontSize='2xl' fontWeight='900'><ListIcon as={Icon} color='red' />{description}</Text>
    )
}