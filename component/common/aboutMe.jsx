import React from 'react';
import { Container, Row, Button, Badge } from 'react-bootstrap';
import RoundedImage from './roundedImage';
import './aboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../../constant/constants';
import Run from './run';
import SocialLinks from './socialLinks';

function AboutMe(props) {
    return (
        <Container className="newPage fullSize aboutMe">
            <Row>
                <div
                    id="aboutContent"
                    className="col-md-6 col-sx-12 font-roboto d-flex align-content-center flex-wrap fullSize order-sx-2 order-sm-2 order-md-1"
                >
                    <div>
                        {/* <h3 className="font-roboto"> About me </h3> */}
                        <div className="content-justify  m-tb-15">
                            <Badge variant="primary">
                                <h2 className="noMr"> Hello i 'm</h2>
                            </Badge>
                            <div className="nameLogo">
                                <div className="nameLogo-A">A</div>
                                <div className="nameLogo-run">
                                    <div className="runner-logo">
                                        <Run />
                                    </div>
                                    <div className="run-txt">run</div>
                                </div>
                                <div className="nameLogo-BS">BS</div>
                            </div>
                            <h5>
                                I build things on the Internet{' '}
                                <FontAwesomeIcon icon={'globe-asia'} /> as a Web
                                Developer based in Bengaluru, India.
                            </h5>
                            I specialize in developing web applications,
                            websites, and UI/UX design. I’m passionate about
                            creating seamless and dynamic user experiences using
                            modern web technologies.{' '}
                            <FontAwesomeIcon icon={'laptop-code'} />
                        </div>
                        <p className=" m-tb-15">
                            When I'm not coding, I enjoy traveling{' '}
                            <FontAwesomeIcon icon={'biking'} /> and exploring
                            new places.
                        </p>
                        <p> Also I am good at </p>
                        <p className=" m-tb-15">
                            {constants.skills.map((skill, index) => {
                                return (
                                    <Button
                                        key={index}
                                        variant="outline-info"
                                        className="skill"
                                    >
                                        {skill.name}
                                    </Button>
                                );
                            })}
                        </p>

                        <p>To know more about me: </p>
                        <div className="invert">
                            <SocialLinks />
                        </div>

                        <p className=" m-tb-15">
                            Email:{' '}
                            <a
                                className="email btn-outline-info"
                                href="mailto:bsarunmca@gmail.com?Subject=FromMyWebSite"
                                data-text="bsarunmca@gmail.com"
                            >
                                bsarunmca@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div
                    id="aboutImg"
                    className="col-md-6 col-sx-12 order-sm-1 order-md-2 order-sx-1"
                >
                    <RoundedImage />
                </div>
            </Row>
        </Container>
    );
}

export default AboutMe;
