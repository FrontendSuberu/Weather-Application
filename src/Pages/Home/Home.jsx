import React from 'react'
import { Link } from 'react-router-dom';
import FeatureCSS from "../Home/Feature.module.css"
import HomeCSS from "../Home/Home.module.css"
import Illustrate01 from "../Home/assets/realtimeupdate.svg"
import Illustrate02 from "../Home/assets/forecast.svg"
import Illustrate03 from "../Home/assets/customizable.svg"
import Illustrate04 from "../Home/assets/responsive.svg"
import TryoutCss from "../Home/Tryout.module.css"
import FooterCss from "../Home/Footer.module.css"
import introimg from "../Home/assets/getstarted.svg"
export default function Home() {
    return (
        <>
            {/* header */}
            <header>

                <div className={`container`}>
                    <div className={HomeCSS.innerheader}>

                        <menu className={HomeCSS.menu}>
                            <div></div>
                            <div></div>
                        </menu>


                        <div className={HomeCSS.logo}>
                            <Link to="/">
                                <svg aria-details='Logo' viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="61" height="60" rx="20" fill="black" />
                                    <path d="M20.912 43L14.352 19.16H18.352L23.664 39.8H22.672L28.176 19.16H32.112L37.616 39.8H36.592L41.936 19.16H45.904L39.376 43H35.12L29.584 22.68H30.704L25.136 43H20.912Z" fill="#FCFCFC" />
                                </svg>
                            </Link>

                            <nav className={HomeCSS.navigation}>
                                <ul className={HomeCSS.innernavigation}>
                                    <li>
                                        <Link className={HomeCSS.active}>Home</Link>
                                    </li>
                                    <li>
                                        <Link>Features</Link>
                                    </li>
                                    <li>
                                        <Link>About</Link>
                                    </li>
                                    <li>
                                        <Link>Faq</Link>
                                    </li>
                                </ul>
                            </nav>

                        </div>


                        <a href="https://github.com/FrontendSuberu/Weather-Application" target="_blank" rel="noopener noreferrer">
                            <div className={HomeCSS.github}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </div>
                        </a>
                    </div>

                </div>
            </header>

            {/* introduction */}
            <section className={HomeCSS.intro}>
                <div className={`container`}>

                    <div className={HomeCSS.introcontent}>

                        <div className={HomeCSS.introimage}>
                            <img src={introimg} alt="User" />
                        </div>


                        <div className={HomeCSS.intro_txt}>
                            <h1>Your Go-To Destination for Up to Date Weather Forecasts</h1>
                            <p>Stay informed and prepared with Weather Whiz – your comprehensive weather companion. Get accurate and reliable weather forecasts directly from your browser, anytime, anywhere.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* features */}
            <section className={FeatureCSS.feature_field}>
                <div className={`container`}>

                    <div className={FeatureCSS.intro}>
                        <h1>Key Features</h1>
                    </div>


                <div className={FeatureCSS.feat}>

                    <div className={FeatureCSS.feature1}>
                        <div className={FeatureCSS.illustration}>
                            <img src={Illustrate01} alt="a map with details" />
                        </div>

                        <div className={FeatureCSS.featurecontent}>
                            <p>Real-time weather updates for any location</p>
                        </div>
                    </div>

                    <div className={FeatureCSS.feature2}>
                        <div className={FeatureCSS.illustration}>
                            <img src={Illustrate02} alt="Detailed forecasts for the upcoming days" />
                        </div>

                        <div className={FeatureCSS.featurecontent}>
                            <p>Detailed forecasts for the upcoming days</p>
                        </div>
                    </div>

                    <div className={FeatureCSS.feature3}>
                        <div className={FeatureCSS.illustration}>
                            <img src={Illustrate03} alt="a gear with rotating arrows" />
                        </div>

                        <div className={FeatureCSS.featurecontent}>
                            <p>Customizable units for temperature, wind speed, and more</p>
                        </div>
                    </div>

                    <div className={FeatureCSS.feature4}>
                        <div className={FeatureCSS.illustration}>
                            <img src={Illustrate04} alt="a gear with rotating arrows" />
                        </div>

                        <div className={FeatureCSS.featurecontent}>
                            <p>Responsive design for seamless browsing on any device.</p>
                        </div>
                    </div>
                </div>

                </div>
            </section>

            {/* try it out */}
            <section className={TryoutCss.tryout}>
                <div className={`container`}>
                    <div className={TryoutCss.intro}>
                        <h1>Try it Out</h1>
                        <p>Explore Weather Whiz now to plan your day with confidence. Click below to access the application</p>

                        <Link to="/weatherWhiz-Weather" className={TryoutCss.button}>Start Exploring Weather Whiz</Link>
                    </div>
                </div>
            </section>

            {/* footer */}
            <section className={FooterCss.footer}>
                <div className={`container`}>
                    <p>Made with <span>❤</span> from Nigeria</p>
                </div>
            </section>


        </>
    )
}
