import { Text, ListIcon} from '@chakra-ui/react'

interface ItemOfListProps {
    description: string
    Icon: any
    colorIcon?: string
    colorTextHover?: string
}

export function ItemOfList({description, Icon, colorIcon = 'white', colorTextHover = 'red'}: ItemOfListProps) {
    return (
        <Text fontSize='2xl' fontWeight='900' _hover={{cursor: 'pointer', color: colorTextHover}}><ListIcon as={Icon} color={colorIcon} />{description}</Text>
    )
}