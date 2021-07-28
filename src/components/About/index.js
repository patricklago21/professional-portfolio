import React from 'react';
import gradPic from "../../assets/images/gradPic.jpg";

function About() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={gradPic} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                        height="400" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">My Journey</h1>
                    <p className="lead">About Me text</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="mailto: patricklago21@gmail.com" type="button" className="btn btn-primary btn-lg px-4 me-md-2">Reach Out</a>
                        <a href="https://github.com/patricklago21" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-outline-secondary btn-lg px-4">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;