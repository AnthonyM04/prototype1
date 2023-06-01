import { Container, Row, Col } from "react-bootstrap"
import AppLayout from "../layout/AppLayout"

export default function Error404() {
    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                    <p>ERROR</p>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}