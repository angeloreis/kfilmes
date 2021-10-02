import { Card, Image } from "react-bootstrap";

interface PropsCardImage {
    sourceImage: string
    titleCard?: string
}

const CardImage: React.FC<PropsCardImage> = ({ sourceImage, titleCard }) => {
    return (
        <Image
            src={sourceImage}
            alt={titleCard}
            thumbnail
        />                        
    );
}

export default CardImage