import React from 'react'
import { MortarboardFill, BriefcaseFill, Joystick } from 'react-bootstrap-icons'

const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-card">
                <MortarboardFill className='about-icon' />
                <h3 className="about-title">Education</h3>
                <span className="about-subtitle">Bachelors in Computer Science</span>
            </div>

            <div className="about-card">
                <BriefcaseFill className='about-icon' />
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">Code Ninjas: May 2023 - Current</span>
            </div>

            <div className="about-card">
                <Joystick className='about-icon' />
                <h3 className="about-title">Hobbies</h3>
                <span className="about-subtitle"></span>
            </div>
        </div>
    )
}

export default Info