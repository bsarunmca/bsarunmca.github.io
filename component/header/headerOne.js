import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerOne.scss';
import Contact from '../common/contact';
import FullImageContent from '../common/fullImageContent';
// import IconList from "../common/iconList";
import AboutMe from '../common/aboutMe';
import Skills from '../common/skills';
// import Run from "../common/run";
import Experience from '../common/experience';
import {
    HashRouter as Router,
    Switch,
    hashHistory,
    Route,
    NavLink,
} from 'react-router-dom';
const HeaderOne = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <Router history={hashHistory}>
            <div className="headerTemplateOne">
                <div className={`header nav ${menuToggle ? 'nav-full' : ''}`}>
                    <ul>
                        <li
                            className="toggleIcon hide-sm-size togalMenuIcon"
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            <div className="d-inline-block logo">
                                <FontAwesomeIcon
                                    icon="outdent"
                                    className="fontAwesomeIcon align-middle"
                                />
                            </div>{' '}
                        </li>{' '}
                        <li className="firstSelectionIcon">
                            <NavLink
                                onClick={() => setMenuToggle(false)}
                                exact
                                className="link"
                                activeClassName="selected"
                                to="/"
                            >
                                <FontAwesomeIcon
                                    icon="home"
                                    className="fontAwesomeIcon align-middle"
                                />
                                <span> Home </span>{' '}
                            </NavLink>{' '}
                        </li>{' '}
                        <li>
                            <NavLink
                                onClick={() => setMenuToggle(false)}
                                exact
                                className="link"
                                activeClassName="selected"
                                to="/about"
                            >
                                <FontAwesomeIcon
                                    icon="user"
                                    className="fontAwesomeIcon align-middle"
                                />
                                <span> About me </span>{' '}
                            </NavLink>{' '}
                        </li>{' '}
                        <li>
                            <NavLink
                                onClick={() => setMenuToggle(false)}
                                exact
                                className="link"
                                activeClassName="selected"
                                to="/skills"
                            >
                                <FontAwesomeIcon
                                    icon="graduation-cap"
                                    className="fontAwesomeIcon align-middle"
                                />
                                <span> Education & Skills </span>{' '}
                            </NavLink>{' '}
                        </li>{' '}
                        <li>
                            <NavLink
                                onClick={() => setMenuToggle(false)}
                                exact
                                className="link"
                                activeClassName="selected"
                                to="/experience"
                            >
                                <FontAwesomeIcon
                                    icon="shoe-prints"
                                    className="fontAwesomeIcon align-middle"
                                />
                                <span> Experience </span>{' '}
                            </NavLink>{' '}
                        </li>{' '}
                        <li>
                            {' '}
                            {/* <a
                                                              className="email"
                                                              href="mailto:bsarunmca@gmail.com?Subject=FromMyWebSite"
                                                              data-text="bsarunmca@gmail.com"
                                                            > */}{' '}
                            {/* <NavLink
                                onClick={() => setMenuToggle(false)}
                                exact
                                className="link"
                                activeClassName="selected"
                                to="/contact"
                            >
                                <FontAwesomeIcon
                                    icon="handshake"
                                    className="fontAwesomeIcon align-middle"
                                />
                                <span> Contact </span>{' '}
                            </NavLink>{' '} */}
                        </li>{' '}
                        {/* <li>
                                                    <NavLink
                                                        onClick={() => setMenuToggle(false)}
                                                        exact
                                                        className="link"
                                                        activeClassName="selected"
                                                        to="/vaccination"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon="heartbeat"
                                                            className="fontAwesomeIcon align-middle"
                                                        />
                                                        <span> Vaccination </span>
                                                    </NavLink>
                                                </li> */}{' '}
                    </ul>{' '}
                </div>{' '}
                <div
                    className={`mainContainer ${menuToggle ? 'menuOpen' : ''}`}
                >
                    <div className="body-cointainer">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={FullImageContent}
                            />{' '}
                            <Route exact path="/about" component={AboutMe} />{' '}
                            <Route exact path="/skills" component={Skills} />{' '}
                            <Route
                                exact
                                path="/experience"
                                component={Experience}
                            />{' '}
                            <Route exact path="/contact" component={Contact} />{' '}
                            {/* <Route
                                                        exact
                                                        path="/vaccination"
                                                        component={Vaccination}
                                                    /> */}{' '}
                            <Route path="*">
                                <FullImageContent />
                            </Route>{' '}
                        </Switch>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
        </Router>
    );
};
const Vaccination = function () {
    return <div> Hello heartbeat </div>;
};
export default HeaderOne;
