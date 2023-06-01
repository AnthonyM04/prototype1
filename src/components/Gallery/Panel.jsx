import { Col, Image } from "react-bootstrap";

export default function Panel( {element: {title, content, image}} ) {
    return(
        <Col xs={10} md={6} lg={4} xl={3}>
            <Image fluid src={image}/>
            <h3>{title}</h3>
            <p>{content}</p>
        </Col>
    );
}