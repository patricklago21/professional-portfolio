import React from 'react';
import resume from "../../assets/images/resume-pic.png";
import resumeDoc from "../../assets/documents/patrick-lago-resume.pdf";

function Resume() {
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-4 fw-bold">Resume</h1>
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
        </div>
    )
}

export default Resume; 