import React from 'react';
import { Container, Row, Button, Badge } from 'react-bootstrap';
import RoundedImage from './roundedImage';
import './aboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../../constant/constants';

function AboutMe(props) {
    const skills = [
        'JavaScript',
        'React Js',
        'Redux',
        'HTML 5',
        'CSS 3',
        'JSON',
        'MUI',
        'Bootstrap',
        'Webpack',
        'GCP',
        'Performance',
        'development',
        'jQuery',
        'Agile',
        'Debugging',
    ];
    return (
        <Container className="newPage fullSize aboutMe">
            <Row>
                <div
                    id="aboutContent"
                    className="col-md-6 col-sx-12 font-roboto d-flex align-content-center flex-wrap fullSize order-sx-2 order-sm-2 order-md-1"
                >
                    <div>
                        <h3 className="font-roboto"> About me </h3>
                        <div className="content-justify  m-tb-15">
                            <h5>
                                Hello! I build things on the Internet
                                <FontAwesomeIcon icon={'globe-asia'} /> as a Web
                                Developer based in Bengaluru, India.
                            </h5>
                            I love <FontAwesomeIcon icon={'heart'} /> to develop
                            web application, websites and also designing.
                            <FontAwesomeIcon icon={'laptop-code'} />
                        </div>
                        <p className=" m-tb-15">
                            I like to travel on my
                            <FontAwesomeIcon icon={'biking'} />
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
                        <p className=" m-tb-15">
                            Contact me @
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
