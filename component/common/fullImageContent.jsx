import React from 'react';
import './fullImageContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import SocialLinks from './socialLinks';
import Run from './run';
import constants from '../../constant/constants';

function FullImageContent() {
    return (
        <div id="fullImageContent">
            <div className="imageContainer">
                <div className="imgOverLay" />
                <div className="content">
                    <Badge variant="primary">
                        <h5> Hello i 'm</h5>
                    </Badge>
                    <h1> {constants.name} </h1>
                    <h3> I build things for the web. </h3>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <label className="email"> {constants.email} </label>
                    </p>
                    <div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullImageContent;
