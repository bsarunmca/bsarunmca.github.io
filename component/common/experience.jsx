import React from 'react';
import { Container } from 'react-bootstrap';
import Run from '../common/run';
import './experience.scss';
import constants from '../../constant/constants';

function Experience() {
    const expDetails = constants.expDetails;
    return (
        <Container className="newPage fullSize experience">
            <h3 className="align-center pading-top"> Experience </h3>
            <ul className="timeline pading-top-bottom">
                {expDetails.map((exp, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                index % 2 == 0 ? 'timeline-inverted' : ''
                            }
                        >
                            <div className="timeline-image">
                                <h4>
                                    {exp.yearFrom} <br /> - <br /> {exp.yearTo}
                                </h4>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4> {exp.role} </h4>
                                    <h4 className="subheading">
                                        {exp.company}
                                    </h4>
                                    <p>{exp.responsibility}</p>
                                    <p>
                                        <span className="sub-heading">
                                            Tech stack:
                                        </span>
                                        {exp.environment}
                                    </p>
                                    <p className="">
                                        <span className="sub-heading">
                                            Key Responsibilities:
                                        </span>
                                    </p>
                                </div>
                                {exp.keyResponsibilities.map((pro, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="timeline-body"
                                        >
                                            <p className="">{pro}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}

export default Experience;
