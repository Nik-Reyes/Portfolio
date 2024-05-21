import React from 'react'
import "./content.css"
import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'

const Content = () => {
    return (
        <section className="content section" id="content">
            <div className="content-container container grid">
                <div className="grid-contents grid">
                    <Social />
                    <div className="home-img"> </div>
                    <Data />
                </div>
                <Scroll />
            </div>
        </section>
    )
}

export default Content
