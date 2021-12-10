import { Link, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

interface LinkOfMenuProps extends ChakraLinkProps {
    description: string    
}

export function LinkOfMenu({description, ...rest}: LinkOfMenuProps) {
  return (
    <Link
      _hover={{
        cursor: "pointer",
        borderBottomColor: "red",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}
      {...rest}
    >
      {description}
    </Link>
  );
}
