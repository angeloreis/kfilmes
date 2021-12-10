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
            boxSize='150px'
        />                        
    );
}
