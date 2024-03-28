import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import './skills.scss';
import Run from '../common/run';
import constants from '../../constant/constants';

function Skills() {
    const skills = [
        {
            name: 'JavaScript, ES6 and latest',
            per: '90%',
            perRun: '95%',
        },
        {
            name: 'React JS',
            per: '80%',
            perRun: '85%',
        },
        {
            name: 'Redux',
            per: '75%',
            perRun: '80%',
        },
        {
            name: 'jQuery',
            per: '90%',
            perRun: '95%',
        },
        {
            name: 'HTML, HTML5',
            per: '90%',
            perRun: '95%',
        },
        {
            name: 'CSS, CSS3, SCSS',
            per: '90%',
            perRun: '95%',
        },
        {
            name: 'Webpack',
            per: '60%',
            perRun: '65%',
        },
        {
            name: 'Angular JS (1.x)',
            per: '70%',
            perRun: '75%',
        },
        {
            name: 'AJAX, JSON',
            per: '90%',
            perRun: '95%',
        },
        {
            name: 'MUI',
            per: '90%',
            perRun: '95%',
        },
        {
            name: 'Bootstrap',
            per: '60%',
            perRun: '65%',
        },
    ];

    return (
        <Container className="newPage fullSize skils">
            <Row>
                <div className="col-md-6 col-sx-12 pading-top-bottom">
                    <h3> Technical Skills </h3>
                    {constants.skills.map((skill, index) => {
                        return (
                            <div key={index} className="skill-item">
                                <div className="progress-title">
                                    {skill.name}
                                </div>
                                <div className="progress progressBar">
                                    <div
                                        style={{ width: skill.per + '%' }}
                                        className={`progress-bar progress-bar-skill${
                                            index + 1
                                        } `}
                                    >
                                        <div
                                            className="progress-bar-run"
                                            style={{
                                                width:
                                                    parseInt(skill.per) +
                                                    5 +
                                                    '%',
                                            }}
                                        >
                                            <Run />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="col-md-6 col-sx-12 pading-top-bottom">
                    <h3> Education </h3>

                    <Card className="card-top-bottom">
                        {constants.education.map((edu) => {
                            return (
                                <>
                                    <Card.Header>{edu.course}</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>{edu.college}</p>
                                            <footer className="blockquote-footer">
                                                {edu.year}
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </>
                            );
                        })}
                    </Card>
                    <h3 className="pading-top"> Achievements </h3>
                    <Card className="card-top-bottom">
                        {constants.achievements.map((ach) => {
                            return (
                                <>
                                    <Card.Header>
                                        Achievements at {ach.place}{' '}
                                    </Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            {ach.achievement.map((detail) => {
                                                return (
                                                    <footer className="blockquote-footer">
                                                        {detail}
                                                    </footer>
                                                );
                                            })}
                                        </blockquote>
                                    </Card.Body>
                                </>
                            );
                        })}
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default Skills;
