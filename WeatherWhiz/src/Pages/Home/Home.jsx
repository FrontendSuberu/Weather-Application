import React from 'react'
import { Link } from 'react-router-dom';
import HomeCSS from "../Home/Home.module.css"

export default function Home() {
    return (
        <>
            <header>
                <div className={HomeCSS.innerheader}>

                    <menu className={HomeCSS.menu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </menu>


                    <logo>
                        <svg width="61" height="60" aria-details='Logo' viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="61" height="60" rx="20" fill="black" />
                            <path d="M20.912 43L14.352 19.16H18.352L23.664 39.8H22.672L28.176 19.16H32.112L37.616 39.8H36.592L41.936 19.16H45.904L39.376 43H35.12L29.584 22.68H30.704L25.136 43H20.912Z" fill="#FCFCFC" />
                        </svg>
                    </logo>


                    <nav className={HomeCSS.navigation}>
                        <ul className={HomeCSS.innernavigation}>
                            <li>
                                <Link>Home</Link>
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

                    <div className={HomeCSS.tryout}>
                        <Link>Tryout</Link>
                    </div>
                </div>
            </header>
        </>
    )
}
