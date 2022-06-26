import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TwoColContainer() {
	return (
		<Container className="newPage twoColContainer">
			<Row>
				<Col className="xs={12} md={6} fullSize">
					<div></div>
				</Col>
				<Col className="xs={12} md={6} fullSize">
					<div></div>
				</Col>
			</Row>
		</Container>
	);
}

export default TwoColContainer;
