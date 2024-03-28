import React from 'react';
import './resume.scss';
import constants from '../../constant/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume() {
    const expDetails = constants.expDetails;
    return (
        <div className="resume-css">
            <div className="resume-container">
                <div className="container">
                    <div className="left-column">
                        <div className="header">
                            <h1>{constants.name}</h1>
                            <h2>{constants.role}</h2>
                        </div>
                        <div className="section">
                            <h3 className="section-title">Personal Info</h3>
                            <div className="details">
                                <p>
                                    <strong>Address:</strong>
                                    <br />
                                    {constants.address}
                                </p>
                                <p>
                                    <strong>Phone:</strong>
                                    <br />
                                    {constants.contactNo}
                                </p>
                                <p>
                                    <strong>Email:</strong>
                                    <br />
                                    {constants.email}
                                </p>
                                <p>
                                    <strong>Portfolio:</strong>
                                    <br />
                                    <a
                                        href={constants.portfolio}
                                        className="link"
                                        target="_blank"
                                    >
                                        {constants.portfolio}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="section">
                            <h3 className="section-title">Achievements</h3>
                            <div className="details">
                                {constants.achievements.map((ach) => {
                                    return (
                                        <p>
                                            <strong>{ach.place}:</strong>
                                            <br />
                                            <ul>
                                                {ach.achievement.map((itm) => (
                                                    <li>{itm}</li>
                                                ))}
                                            </ul>
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="section">
                            <h3 className="section-title">Skills</h3>
                            <div className="details">
                                <ul className="skills-list">
                                    {constants.skills.map((skill) => (
                                        <li>{skill.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="section">
                            <h3 className="section-title">Education</h3>
                            <div className="details">
                                {constants.education.map((edu) => {
                                    return (
                                        <p>
                                            <strong>{edu.year}</strong>
                                            <br />
                                            {edu.college}
                                            <br />
                                            {edu.course}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="section">
                            <div className="details">
                                <p>{constants.objective}</p>
                            </div>
                        </div>
                        <div className="section">
                            <h3 className="section-title">Experience</h3>
                            {constants.expDetails.reverse().map((exp) => {
                                return (
                                    <div className="details mb-20">
                                        <p>
                                            <strong>{exp.role}</strong>
                                            <br />
                                            <strong>
                                                <i>
                                                    {exp.company} |{' '}
                                                    {exp.yearFrom} -{' '}
                                                    {exp.yearTo}
                                                </i>
                                            </strong>
                                            <br />
                                            <p>{exp.responsibility}</p>
                                            <em>Tech stack:</em>
                                            <br />
                                            <p>{exp.environment}</p>

                                            <em>Key Responsibilities:</em>
                                            <br />
                                            <ul>
                                                {exp.keyResponsibilities.map(
                                                    (point) => (
                                                        <li>{point}</li>
                                                    ),
                                                )}
                                            </ul>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
