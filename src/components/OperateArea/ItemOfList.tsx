import { Text, ListIcon} from '@chakra-ui/react'

interface ItemOfListProps {
    description: string
    Icon: any
    colorIcon?: string
    colorTextHover?: string
    fontSize?: string
}

export function ItemOfList({description, Icon, colorIcon = 'white', colorTextHover = 'red', fontSize = '2xl'}: ItemOfListProps) {
    return (
        <Text fontSize={fontSize} fontWeight='900' _hover={{cursor: 'pointer', color: colorTextHover}}><ListIcon as={Icon} color={colorIcon} />{description}</Text>
    )
}