import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = props => {
    if(props.location.pathname === '/cart') return null;

    return (
        <footer>
            <div className='footer-top-container'>
                <div className='footer-top max-body-width'>                    
                        <img src="https://cdn-icons-png.flaticon.com/64/4001/4001496.png " width="64" height="64" alt="" title="" className="img-small"></img>

                        
                    <p>
                        Cutesy is powered by 100% renewable cuteness.
                    </p>
                    {/* https://freeicons.io/tools-design-4/picture-magic-improve-editing-tool-icon-123333 */}
                 
                </div>
                
            </div>
            <div className='footer-main-container'>
                <div className='footer-main max-body-width'>
                    <div className='skill-container info-container'>
                        <h4>skills</h4>

                        <ul className='info-list'>
                            <li>JavaScript</li>
                            <li>Ruby on Rails</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>GitHub</li>
                            <li>HTML5/CSS3</li>
                        </ul>
                    </div>
                    <div className='hobby-container info-container'>
                        <h4>hobbies</h4>

                        <ul className='info-list'>
                            <li>enjoying coffee</li>
                            <li>
                                playing with my cats
                            </li>
                            <li>finding good eats</li>
                            <li>coding rockstar</li>
                            <li>anime nerd</li>
                            <li>gaming enthusiast</li>
                        </ul>
                    </div>
                    <div className='contact-info-container info-container'>
                        <h4>portfolio</h4>

                        <ul className='info-list'>
                            <li className='footer-social-links'>
                               <a href="#">
                                    <FontAwesomeIcon icon={faGithub} />
                               </a>
                            </li>
                            <li className='footer-social-links'>
                               <a href="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                               </a>
                            </li>
                            <li className='footer-social-links'>
                               <a href="#">
                                    <FontAwesomeIcon icon={faAngellist} />
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
                            © 2024 Cutesy, Inc.
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