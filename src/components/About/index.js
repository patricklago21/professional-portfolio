import React from 'react';
import gradPic from "../../assets/images/gradPic.jpg";

function About() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={gradPic} className="d-block mx-lg-auto img-fluid" alt="Profile at St. Mary's" width="80%"
                        height="400" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: '#004e89' }}>My Journey</h1>
                    <p className="lead" style={{ color: '#1a659e' }}>After three years in sales at various SaaS companies, I decided to make a transition. In February of 2021, I enrolled in the UC Berkeley Coding Bootcamp. Within six months, I built a strong foundational knowledge of JavaScript, Node.js, React, Express.js, SQL, and MongoDB. The projects shown below are some of my highlights as I progressed through the bootcamp. Please feel free to reach out to learn more!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="mailto: patricklago21@gmail.com" type="button" className="btn btn-lg px-4 me-md-2" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Reach Out</span></a>
                        <a href="https://github.com/patricklago21" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-outline-secondary btn-lg px-4">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;