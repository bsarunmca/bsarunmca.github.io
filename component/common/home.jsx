import React from 'react';
import './home.scss';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import SocialLinks from './socialLinks';
import Run from './run';
import constants from '../../constant/constants';

function Home() {
    return (
        <div className="fullSize home">
            <Row className="full-width">
                <div className="col-md-6 col-sx-12 fullSize leftCointainer">
                    <div className="content">
                        <Badge variant="primary">
                            <h5> Hello i 'm</h5>
                        </Badge>
                        <h1> {constants.name} </h1> <h3> Web Developer </h3>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <label type="email"> bsarunmca @gmail.com </label>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMobileAlt} />
                            <label type="tel"> +91 - 9739185574 </label>
                        </p>
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sx-12 fullSize">
                    <div className="logo">
                        <div className="logoA"> A </div>
                        <div className="logoR">
                            <div className="logoAinmation">
                                <Run />
                            </div>
                            <div className="logoRun"> run... </div>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default Home;
