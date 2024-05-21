import React from 'react'
import Photo from "C:/Users/nikol/Desktop/349/Class/project2/portfolio/src/assets/aboutMe.jpg"
import "./about.css"
import Cards from './Cards'
import ScrollButton from './Scroll'

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="main-content">
                <h2 className="section-title">About Me</h2>
                <div className="about-container container grid">
                    <img src={Photo} alt='' className='about-image' />
                    <div className="about-info">
                        <Cards />
                        <p className='about-description'>Hi there, I'm Nik! I am a full time student and I work part time at CodeNinjas where I can help the youth get a jump-start in coding.
                            In my off time, I like to hike, creatively write, workout, and or read. Nice to meet you!</p>
                    </div>
                </div>
                <ScrollButton />
            </div>
        </section>
    )
}

export default About