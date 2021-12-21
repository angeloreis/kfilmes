import { Image } from "@chakra-ui/react";

interface PropsCardImage {
    sourceImage: string
    titleCard?: string

}

export function CardImage({ sourceImage, titleCard }: PropsCardImage) {
    return (
        
            <Image
                src={sourceImage}
                alt={titleCard}
                width={{sm: 650, md: 450, lg: 150}}
            />                        
        
    );
}
