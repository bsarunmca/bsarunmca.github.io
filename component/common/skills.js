import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import './skills.scss';
import Run from '../common/run';

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
                    <h3> Technical Skills </h3>{' '}
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="skill-item">
                                <div className="progress-title">
                                    {' '}
                                    {skill.name}{' '}
                                </div>{' '}
                                <div className="progress progressBar">
                                    <div
                                        style={{ width: skill.per }}
                                        className={`progress-bar progress-bar-skill${
                                            index + 1
                                        } `}
                                    >
                                        <div
                                            className="progress-bar-run"
                                            style={{ width: skill.perRun }}
                                        >
                                            <Run />
                                        </div>{' '}
                                    </div>{' '}
                                </div>{' '}
                            </div>
                        );
                    })}{' '}
                </div>{' '}
                <div className="col-md-6 col-sx-12 pading-top-bottom">
                    <h3> Education </h3>{' '}
                    <Card className="card-top-bottom">
                        <Card.Header>
                            MCA - Master of Computer Application{' '}
                        </Card.Header>{' '}
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p> Erode Arts and Science College </p>{' '}
                                <footer className="blockquote-footer">
                                    2010 - 2013{' '}
                                </footer>{' '}
                            </blockquote>{' '}
                        </Card.Body>{' '}
                        <Card.Header className="border-top">
                            BSc - Maths with Computer Application{' '}
                        </Card.Header>{' '}
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p> Jairam Arts & Science College </p>{' '}
                                <footer className="blockquote-footer">
                                    2006 - 2009{' '}
                                </footer>{' '}
                            </blockquote>{' '}
                        </Card.Body>{' '}
                    </Card>{' '}
                    <h3 className="pading-top"> Achievements </h3>{' '}
                    <Card className="card-top-bottom">
                        <Card.Header> Achievements at Toshiba </Card.Header>{' '}
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    Worked at Japan for technical collaboration
                                    and establishing communication bridge
                                    between teams{' '}
                                </footer>{' '}
                                <footer className="blockquote-footer">
                                    Award wining project in a Tech fare at
                                    Toshiba: WebPanel Style Guide.This project
                                    is a toolkit for developing the MFP UI.{' '}
                                </footer>{' '}
                            </blockquote>{' '}
                        </Card.Body>{' '}
                        <Card.Header className="border-top">
                            Achievements at Payoda{' '}
                        </Card.Header>{' '}
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    SPOT award for New tool exploration and
                                    helping the team{' '}
                                </footer>{' '}
                                <footer className="blockquote-footer">
                                    SPOT award for fixing critical issue{' '}
                                </footer>{' '}
                            </blockquote>{' '}
                        </Card.Body>{' '}
                    </Card>{' '}
                </div>{' '}
            </Row>{' '}
        </Container>
    );
}

export default Skills;
