import React from 'react';
import project1 from "../../assets/images/project1.png";
import hausKeepr from "../../assets/images/hauskeepr.png";
import webkitPic from "../../assets/images/webkit.png";

function Projects() {
    return (
        <div>
            {/* hauskeepr */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-7 p-3 mx-lg-6 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1" style={{ color: '#004e89' }}>hausKeepr</h1>
                        <p className="lead" style={{ color: '#1a659e' }}>hausKeepr is a gig-economy app designed to connect housekeepers to clients or working professionals, allowing for an easy and convenient way of getting assistance on house work. Built alongside Luis Arnaut and<br></br> Nell-E Medina.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <a href="https://hauskeepr-mvp.herokuapp.com/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Check It Out</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow">
                        <img src={hausKeepr} className="rounded-lg-3" alt="" width="720"/>
                    </div>
                </div>
            </div>
            
            {/* budget tracker */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-4 p-0 overflow-hidden shadow">
                        <img src={webkitPic} className="rounded-lg-3" alt="" width="320"/>
                    </div>
                    
                    <div className="col-lg-7 offset-lg-1 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-end" style={{ color: '#004e89' }}>Budget Tracker</h1>
                        <p className="lead text-end" style={{ color: '#1a659e' }}>Utilizing WebKit, this application can save actions if a user's internet connection is interrupted or lost. Once the user regains connection,<br></br> their offline actions will persist.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4 mb-lg-3">
                            <a href="https://budget-tracker707.herokuapp.com/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Check It Out</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* project 1 */}
            <div className="container my-5">
                <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                    <div className="col-lg-7 p-3 mx-lg-6 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1" style={{ color: '#004e89' }}>Project Aqua Nauticus</h1>
                        <p className="lead" style={{ color: '#1a659e' }}>The PAN application is designed to provide weather information about a city's coastline. Our goal is to provide robust data to environmentalists, marine biologists, and those who are concerned about the wellness of their marine environment.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <a href="https://patricklago21.github.io/ucberk-project-1/" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-lg px-4 me-md-2 fw-bold" style={{ background: '#ff6b35' }}><span style={{ color: '#ffffff' }}>Check It Out</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow">
                        <img src={project1} className="rounded-lg-3" alt="" width="720"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;