import React from 'react'
import "./contact.css"
import { ArrowRightShort, PersonRaisedHand, EnvelopeAtFill, TelephoneFill } from 'react-bootstrap-icons'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="main-section-contact">
                <h2 className="section-title">Reach out</h2>
                <div className="contact-container container grid">
                    <div className="contact-content">
                        <h3 className="contact-title">Chat with me</h3>
                        <div className="contact-info">
                            <div className="contact-card">
                                <EnvelopeAtFill className='contact-card-icon' />
                                <h3 className="contact-card-title">Email</h3>
                                <span className="contact-card-data">nikolaspreyes@gmail.com</span>
                            </div>

                            <div className="contact-card">
                                <TelephoneFill className='contact-card-icon' />
                                <h3 className="contact-card-title">Cellphone</h3>
                                <span className="contact-card-data">949-540-8784</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact