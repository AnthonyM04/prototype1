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

                <Row>
                    <Col xs={12} md={9} lg={9} xl={8} className="my-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis quis, corporis magnam possimus natus laboriosam ex ad pariatur soluta sed quibusdam tempora ipsum fugiat praesentium, sequi modi in iure.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque. Officia nisi obcaecati quos recusandae architecto quidem doloribus aperiam, porro vero facilis distinctio. Quas aut itaque dolore veniam sed ratione?</p>
                    </Col>
                </Row>
            </Container>

            <Gallery />
        </AppLayout>
    )
}