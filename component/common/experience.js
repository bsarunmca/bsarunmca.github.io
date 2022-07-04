import React from 'react';
import { Container } from 'react-bootstrap';
import Run from '../common/run';
import './experience.scss';

function Experience() {
    const expDetails = [
        {
            yearFrom: 'Jul 2014',
            yearTo: ' Nov 2015',
            company: 'Sakhatech Information Systems Pvt. Ltd',
            role: 'Frontend Developer',
            project: [
                {
                    title: 'Tellofy',
                    environment:
                        'HTML5, CSS3, Bootstrap 3.0, JQuery, AJAX, JSON, Facebook API, Google plus API, Twiter API, & Linkedin API',
                    description: `Tellofy is an online reputation management tool. It provide businesses with real-time review and feedback. 
          It enables businesses to gather feedback, analyze consumer sentiments, 
          showcase positive reviews and address solvable grievances.`,
                },
                {
                    title: 'TNT',
                    environment:
                        'HTML5, CSS3, Bootstrap 3.0, JQuery, AJAX, JSON',
                    description: `TNT – Customer, TNT - Customer Care, TNT – PUD(Purchase and delivery details)`,
                },
            ],
        },
        {
            yearFrom: 'Dec 2015',
            yearTo: 'Nov 2017',
            company: 'Payoda Technologies',
            role: 'Software Engineer',
            project: [
                {
                    title: 'Arista CVP',
                    environment: `HTML5, CSS3, Angularjs, jQuery, d3js, Requirejs, AJAX, JSON, NPM, Grunt, ESLint, Lesshint, JSInspect, Jasmine.`,
                    description: `CLOUDVISION is a central portal for managing all the network switches making it easier to configure and 
          monitor better than ever. 
          CVP combines a front-end web-based dashboard for performing the pre-integrated operational workflows 
          and a backend state repository and analytics engine for maintaining historic network state.`,
                },
            ],
        },
        {
            yearFrom: 'Nov 2017',
            yearTo: 'Dec 2019',
            company: 'Toshiba Software India Private Limted',
            role: 'Senior Software Engineer',
            project: [
                {
                    title: 'WebPanel',
                    environment: `ReactJS, Redux, ESLint, Python, HTML5, CSS3, jQuery, JavaScript`,
                    description: `Toshiba Webpanel, Toshiba Printer has embedded browser for MFP (Multi Functional printers). 
            My role and responsibility is to develop UI for MFP. Traveled Japan(Onsite) to discuss about the architecture and 
            planning for the upcoming modules and providing support for offsite members and establish communication bridge between 
            Toshiba MSM and Toshiba TSIP.`,
                },
                {
                    title: 'WPSG - WebPanel Style Guide',
                    environment: 'ReactJS, HTML5, scss.',
                    description: `WPSG is a toolkit for developing the WebPanel UI.`,
                },
            ],
        },
        {
            yearFrom: 'Dec 2019',
            yearTo: 'Current',
            company: 'NCR Corporation',
            role: 'Software Engineer III',
            project: [
                {
                    title: 'Money Moment',
                    environment: `ReactJS, Redux, GCP, Webpack, HTML5, CSS3, JavaScript, JSON, MUI, GIT, etc...`,
                    description: `NCR Digital Banking is a provider of online banking software to banks and 
                    credit unions. My role and responsibility is to lead a team and develop UI for 'US' banking 
                    application on Payee, Payment, Template and Report module etc... `,
                },
            ],
        },
    ];
    return (
        <Container className="newPage fullSize experience">
            <h3 className="align-center pading-top"> Experience </h3>{' '}
            <ul className="timeline pading-top-bottom">
                {' '}
                {expDetails.reverse().map((exp, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                index % 2 == 0 ? 'timeline-inverted' : ''
                            }
                        >
                            <div className="timeline-image">
                                <h4>
                                    {' '}
                                    {exp.yearFrom} <br /> - <br /> {exp.yearTo}{' '}
                                </h4>{' '}
                            </div>{' '}
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4> {exp.role} </h4>{' '}
                                    <h4 className="subheading">
                                        {' '}
                                        {exp.company}{' '}
                                    </h4>{' '}
                                </div>{' '}
                                {exp.project.map((pro, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="timeline-body"
                                        >
                                            <h5 className="heading">
                                                {' '}
                                                {pro.title}{' '}
                                            </h5>{' '}
                                            <p>
                                                <span className="sub-heading">
                                                    Tech stack:{' '}
                                                </span>{' '}
                                                {pro.environment}{' '}
                                            </p>{' '}
                                            <p className="">
                                                <span className="sub-heading">
                                                    Description:{' '}
                                                </span>{' '}
                                                {pro.description}{' '}
                                            </p>{' '}
                                        </div>
                                    );
                                })}{' '}
                            </div>{' '}
                        </li>
                    );
                })}{' '}
                {/* <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <div className="run-img">
                                        <Run />
                                    </div>{' '}
                                </div>{' '}
                            </li>{' '} */}{' '}
            </ul>{' '}
        </Container>
    );
}

export default Experience;
