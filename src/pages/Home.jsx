import { Container, Row, Col } from "react-bootstrap"
import AppLayout from "../layout/AppLayout.jsx"

export default function Home() {

    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                    <p>Home</p>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}