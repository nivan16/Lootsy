import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
    if(props.location.pathname === '/cart') return null;

    return (
        <footer>
            <div className='footer-top-container'>
                <div className='footer-top max-body-width'>
                    
                        <img 
                            src="data:image/png;base64,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"
                        >

                        </img>
                    <p>
                        Lootsy is powered by 100% renewable magic.
                    </p>
                    {/* https://freeicons.io/tools-design-4/picture-magic-improve-editing-tool-icon-123333 */}
                 
                </div>
                
            </div>
            <div className='footer-main-container'>
                <div className='footer-main max-body-width'>
                    <div className='skill-container info-container'>
                        <h4>Skills</h4>

                        <ul className='info-list'>
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

                        <ul className='info-list'>
                            <li>Gaming</li>
                            <li>
                                Playing with my cats
                            </li>
                            <li>Sleeping</li>
                            <li>Coding</li>
                            <li>Anime</li>
                            <li>Gym</li>
                        </ul>
                    </div>
                    <div className='contact-info-container info-container'>
                        <h4>Get to know me</h4>

                        <ul className='info-list'>
                            <li className='footer-social-links'>
                               <a href="#">
                                    <FontAwesomeIcon className='fa-brand' icon={faGithub} />
                               </a>
                            </li>
                            <li className='footer-social-links'>
                               <a href="#">
                                    <FontAwesomeIcon className='fa-brand' icon={faLinkedin} />
                               </a>
                            </li>
                            <li className='footer-social-links'>
                               <a href="#">
                                    <FontAwesomeIcon className='fa-brand' icon={faAngellist} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bottom-container'>
                <div className='footer-bottom max-body-width'>

                    <div className='footer-location-container'>
                        <div className='footer-location-flag-container'>
                            <img
                                className='footer-location-flag'
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEuElEQVRoge2ZbUxbVRjH/09bYC0ttBTQVdniMgxs2YelE2IwwMIYIWpmVaay7JNkyVw2zTRzZskGH3yNksUXZjKzD7678LJoitGtG5FhgAERp47MxWQxQaCrLS1QXto+fpAh9N723tu3mIxfcj+c55xzz/+553nOOT0FVlnlzoYS8ZK6urPqiYC2BKTeDmYrgCIAawHoASwAcC0+1wH0qJh7Lp17ZDARY8flQPmu7wpUquABrVazt6bSYun49iYAQKfVoKbyHtwubyk2AQCuXnMv9bV7G0eZ6DQHgu9ndQ3eilWDJpZOH372W2HRfaZWR/fopr4hp6a5qQRFG7Pxt2cOvYNONDeVLpX/uOnDq69sAwAcOPoj/hydXnwLWYhxgtTqI1NVJadmgroT+V1dU0l3oPxxe32aSnM6GGLd1RE35uaD+KF3DKPjM/j5mrDs9syhu3cMAJaJX4EWwGGdevpp344HDhouXGlXokd2CFn3DaTpneMtABqUDBCJtjMPRap612zMOkxEQTnvUclpZH30G53F77LbatcviddpNbDVrofc8pZi01IuSHDI5fG2MXO6nMaSIWTdN5CWN+XseOt4aXWkOJcqR86DiOxyeSa/YubdRLQQlwN653iLH9gZLc5jyYM1T1ZLDf3YNOhtAM9HaxQ1B8ptnXsI/KnUSLFg9zbJasegOoOjrzVSfcQcqLK1mwl8ElAe73HEvwACn/LVbs2LVB8xhI4fefCSo3s0V2m8y43/2dbzcn3IBfNLyDG+LNuB/Ue7N/j9wc2xxHsM+4A0RPvdbvfrJpPJI6gSa19p63yDwaIeJ4oo+4A4zMdyc4yvhZuFM9DYqOJh3hN+nom3HH4ekrEKrdQPPAtA2oGKYWtpRrr63njiPgH7gAACNnh3Wouyvh8cieoASL093rhPSh4AUAVVDwNY4YAgBypsne0A22IeRSaKcwAAEb40G7OfWW4T2QdC98e77idyH1gOM9aF2wQhtCZdbfm/xf9/kLQDs/OhzFTEv9JVaJF8gUvhhgqbfQ6ArKNsPMg9C4Uxr3f0Zyw3iOQA+WKTlBIE2gQzcMs9OQRga0rkKGco15RtXW4QmQH+KVVqlCPUJnCAQMOpERMLQm2CVSj9qSoHBWX9VE45HGJHuE30NDpVVfILgM1JV6QEphH9xb7icLPopybQ2eQrUgZR6HNRu5hxzOfL1wRCNwAYkqpKPtMc0BTm5WX+FV4hOgN3GwwTDJxMvi55MPCOmHggyq3ExMSEXpWWcQPAXUlTJg8nhQIbzWazV6wy6rWKb0fpE8Qc8UojJTDq9Rf7v4hUHXW9NFzoayNQS+JVyYPAH0QTD8i4G9XlrDvEQEfiZMnGrgtmviDVSNbt9O/MGUa392Mi7I5flxz4nH8qu76ggPxSLWVfrzOz2uXxNgM4qKSfQhj/Xq+/KPd6XbEQ1+RkDYdwBoBFaV8JnAxqyDNlfa2kU0xf0llWZtBmLDwHwjHEv9nNgPBeYDb9TePly27p5iuJKxSma6xrEVA1MGgvgEKF3a8T8SccwEf6ritjsWpIWCxPV5ds4xCVgbgUjE0AzIsPcPtvVsavIOonFfdknu8fSNTYq6xyJ/MPthsJahhTOjUAAAAASUVORK5CYII="
                            >
                                    
                            </img>
                        </div>

                        <span>
                            United States | English (US) | $ (USD)
                        </span>
                    </div>

                    <div className='footer-legalese'>
                        <span className='footer-business-copyright'>
                            © 2022 Lootsy, Gld.
                        </span>

                        <a href="#">
                            <span className='footer-usage-terms'>
                                Terms of Use
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;