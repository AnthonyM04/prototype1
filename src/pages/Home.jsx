import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layout/AppLayout.jsx";
import Gallery from "../components/Gallery";

export default function Home() {

    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                    <h1>Home</h1>
                    </Col>
                </Row>
            </Container>

            <Gallery />
        </AppLayout>
    )
}