import React from 'react';

const Footer = props => {
    if(props.location.pathname === '/cart') return null;

    return (
        <footer>
            <div className='footer-top'>
                {/* https://freeicons.io/tools-design-4/picture-magic-improve-editing-tool-icon-123333 */}
                <p>
                    (icon here)Lootsy is powered by 100% renewable magic
                </p>
            </div>
            <div className='footer-main-container'>
                <div className='footer-main'>
                    <div className='skill-container info-container'>
                        <h4>Skills</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby on Rails</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Github</li>
                            <li>HTML5/CSS3</li>
                        </ul>
                    </div>
                    <div className='hobby-container info-container'>
                        <h4>Hobbies</h4>
                        <ul>
                            <li>Gaming</li>
                            <li>Coding</li>
                            <li>
                                Playing with my cats
                            </li>
                            <li>Sleeping</li>
                            <li>Gym</li>
                        </ul>
                    </div>
                    <div className='contact-info-container info-container'>
                        <h4>Get to know me</h4>
                        <ul>
                            <li>Github Icon</li>
                            <li>LinkedIn Icon</li>
                            <li>Angellist Icon</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;