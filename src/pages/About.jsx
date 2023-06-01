import { Container, Row, Col } from "react-bootstrap"
import AppLayout from "../layout/AppLayout.jsx"


export default function About() {
    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias modi corporis consectetur quod! Aperiam at sunt consectetur ipsa assumenda quo atque odio nemo culpa! Ex quod possimus dolore quaerat!</p>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}