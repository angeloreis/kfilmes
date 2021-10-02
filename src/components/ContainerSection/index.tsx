import { Container } from "react-bootstrap";

const ContainerSection: React.FC<{children: React.ReactNode, idContainer?: string}> = ({children, idContainer}) => {
    return (
        <Container fluid className="bg-dark" id={idContainer}>
            {children}
        </Container>
    );
}

export default ContainerSection