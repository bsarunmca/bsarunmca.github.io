import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialLinks.scss';
import Resume from '../resume/Resume';
import constants from '../../constant/constants';
// import resume from `${process.env.PUBLIC_URL} + '/resume.pdf'`;

function SocialLinks() {
    const componentRef = useRef();
    const linkList = constants.socialLinkList;
    return (
        <div id="social_link">
            {linkList.map((value, index) => {
                return (
                    <Button
                        variant="outline-light"
                        className="rounded-circle mr-2"
                        href={value.url}
                        target="_blank"
                        key={index}
                        title={value.icon}
                    >
                        <FontAwesomeIcon icon={['fab', value.icon]} />
                    </Button>
                );
            })}
            {console.log(process.env.PUBLIC_URL, process, process.env)}

            <ReactToPrint
                trigger={() => (
                    <Button
                        variant="outline-light"
                        className="rounded-circle mr-2"
                        target="_blank"
                        key="199"
                        title="Resume"
                    >
                        <FontAwesomeIcon icon={'address-card'} />
                    </Button>
                )}
                content={() => componentRef.current}
            />
            <Button
                href="mailto:bsarunmca@gmail.com?Subject=FromMyWebSite"
                data-text="bsarunmca@gmail.com"
                variant="outline-light"
                className="rounded-circle mr-2"
                target="_blank"
                key="100"
                title="Email"
            >
                <FontAwesomeIcon icon={'envelope'} />
            </Button>

            <div className="printResume" ref={componentRef}>
                <Resume />
            </div>
        </div>
    );
}

export default SocialLinks;
