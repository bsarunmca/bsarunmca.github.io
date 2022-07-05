import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialLinks.scss';
// import resume from `${process.env.PUBLIC_URL} + '/resume.pdf'`;

function SocialLinks() {
    let initialLinkList = [
        {
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/arun-bs-43233275/',
        },
        { icon: 'github', url: 'https://github.com/bsarunmca' },
        {
            icon: 'stack-overflow',
            url: 'https://stackoverflow.com/users/3901457/arun',
        },
    ];
    const [linkList, setLinkList] = useState(initialLinkList);
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
            <Button
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                variant="outline-light"
                className="rounded-circle mr-2"
                target="_blank"
                key="199"
                title="Resume"
            >
                <FontAwesomeIcon icon={'address-card'} />
            </Button>
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
        </div>
    );
}

export default SocialLinks;
