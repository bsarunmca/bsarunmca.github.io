import React from "react";
import { Container } from "react-bootstrap";
import Run from "../common/run";
import "./contact.scss";

function Contact() {
  return (
    <Container className="newPage fullSize contact ">
      <div className="contactMe">
        <div><h1 className="align-center pading-top-bottom">Contact </h1></div>
        <div className="logo-arun">
            <div className="font-A">A</div>
            <div className="run-run">
                <div className="run-icon"><Run/></div>
                <div className="run-text">run</div>
            </div>
        </div>
      </div>
      <div className="creative"></div>
      <h2 className="align-center pading-top">
        For more creative{" "}
        <a
          className="email"
          href="mailto:bsarunmca@gmail.com?Subject=FromMyWebSite"
          data-text="bsarunmca@gmail.com"
        >
          bsarunmca@gmail.com
        </a>
      </h2>
    </Container>
  );
}

export default Contact;
