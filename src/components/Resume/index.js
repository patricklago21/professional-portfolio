import React from 'react';
import resume from "../../assets/images/resume-pic.png";
import resumeDoc from "../../assets/documents/patrick-lago-resume.pdf";
import { Mailbox2, PhoneFill, Github, Linkedin } from 'react-bootstrap-icons';

function Resume() {
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Resume</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Description</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href={resumeDoc} download="patrick-lago-resume" type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Download Here</a>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container px-5">
                    <img src={resume} className="img-fluid border rounded-3 shadow-lg" alt="Resume image"
                        width="700" height="500" loading="lazy" />
                </div>
            </div>

            <h1 className="display-5 fw-bold mt-5">Contact</h1>
            <div className="col-lg-6 mx-auto">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><Mailbox2 className="mx-2" /><a href="mailto: patricklago21@gmail.com" className="text-decoration-none">patricklago21@gmail.com</a></li>
                        <li className="list-group-item"><PhoneFill className="mx-2" />+1 (707) 853-9568</li>
                        <li className="list-group-item"><Github className="mx-2" /><a href="https://github.com/patricklago21" className="text-decoration-none">patricklago21</a></li>
                        <li className="list-group-item"><Linkedin className="mx-2" /><a href="https://www.linkedin.com/in/patrick-lago-359204b3/" className="text-decoration-none">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume; 