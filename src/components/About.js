import React, { Component } from 'react'

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div>
                <section id="about">
                    <div className='row'>
                        <div className='three columns'>
                            <img className='profile-pic' src={resumeData.imgAbout}  alt='gambarcuy' />
                        </div>
                        <div className='nine columns main-col'>
                            <h2>About Me</h2>
                            <p>{resumeData.aboutme}</p>
                            <div className='row'>
                                <div className='columns contact-details'>
                                    <h2>Contact Details</h2>
                                    <p className='address'>
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>
                                        <a href={resumeData.walink} target=''>
                                            <i className={resumeData.wa}>  {resumeData.whatsapp}</i>
                                        </a>
                                    </span>
                                    <br></br>
                                    <span>{resumeData.address}</span>
                                    <br></br>
                                    {/* <span>
                                        <i className={resumeData.github}></i>
                                        <i className={resumeData.gitlab}></i>
                                    </span> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

