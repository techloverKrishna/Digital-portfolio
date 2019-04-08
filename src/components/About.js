import React, { Component } from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{resumeData.aboutme}
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                <span>
                                <i style={{paddingRight: 10}} className="fa fa-user-md" aria-hidden="true"/>
                                    {resumeData.name}
                                </span>
                                    <br></br>
                                    <span>
                                    <i style={{paddingRight: 10}} className="fa fa-map-marker" aria-hidden="true"/>
                                        {resumeData.address}
                                    </span>
                                    <br></br>
                                    <span>
                                    <i style={{paddingRight: 10}} className="fa fa-external-link" aria-hidden="true"/>
                                        {resumeData.website}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}