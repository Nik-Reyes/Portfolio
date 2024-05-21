import React from 'react'
import { Github, Linkedin, Camera2 } from 'react-bootstrap-icons';

const Social = () => {
    return (
        <div className="social-contents">
            <a href="https://github.com/Nik-Reyes" className="social-button" target="_blank">
                <Github />
            </a>

            <a href="https://www.linkedin.com/in/nikolas-reyes/" className="social-button" target="_blank">
                <Linkedin />
            </a>

            <a href="https://www.flickr.com/people/184336516@N02/" className="social-button" target="_blank">
                <Camera2 />
            </a>
        </div>
    )
}

export default Social