import React from 'react'
import { Link } from 'react-router-dom'
import "../NavBar/navbar.module.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="dashboard">

                    <div className="logo">
                        <svg width="" height="" aria-details='Logo' viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="61" height="60" rx="20" fill="black" />
                            <path d="M20.912 43L14.352 19.16H18.352L23.664 39.8H22.672L28.176 19.16H32.112L37.616 39.8H36.592L41.936 19.16H45.904L39.376 43H35.12L29.584 22.68H30.704L25.136 43H20.912Z" fill="#FCFCFC" />
                        </svg>
                    </div>

                    <ul className="navfield">
                        <li>
                            <Link>
                                <div className="icon">

                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 32 32"><path fill="#ced3ed" d="M26.53,8.49l-8-4.79c-1.56-.93-3.5-.93-5.06,0l-8,4.79c-1.52.91-2.47,2.6-2.47,4.41v10.99c0,2.82,2.24,5.11,5,5.11h16c2.76,0,5-2.29,5-5.11v-10.99c0-1.8-.95-3.49-2.47-4.41Z" /><path fill="#4257ff" d="M20,23h-8c-.55,0-1-.45-1-1s.45-1,1-1h8c.55,0,1,.45,1,1s-.45,1-1,1Z" /></svg>
                                </div>
                                <p>Dashboard</p>
                            </Link>
                        </li>

                        <li>
                            <Link>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 32 32"><polygon fill="#ced3ed" points="12 8 12 28 4 24 4 4 12 8" /><polygon fill="#4257ff" points="20 4 20 24 12 28 12 8 20 4" /><polygon fill="#ced3ed" points="28 8 28 28 20 24 20 4 28 8" /></svg>
                                </div>

                                <p>Map</p>
                            </Link>
                        </li>

                        <li>
                            <Link>

                                <div className="icon">

                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 32 32"><path fill="#ced3ed" d="M23,12c-.59,0-1.18.07-1.75.22-1.52-3.71-5.19-6.22-9.25-6.22-5.51,0-10,4.49-10,10s4.49,10,10,10h11c3.86,0,7-3.14,7-7s-3.14-7-7-7Z" /></svg>
                                </div>
                                <p>Forecast</p>
                            </Link>
                        </li>

                        <li>
                            <Link>
                                <div className="icon">

                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 32 32"><path fill="#ced3ed" d="M28.5,18.53c-.93-.53-1.48-1.48-1.48-2.53s.55-2,1.48-2.53c.23-.13.4-.35.47-.61s.03-.53-.1-.76l-3.03-5.2c-.28-.47-.88-.64-1.36-.36-.93.54-2.05.53-2.99,0-.92-.53-1.46-1.48-1.46-2.53,0-.55-.45-1-1-1h-6.05c-.55,0-1,.45-1,1,0,1.05-.55,1.99-1.46,2.53-.93.54-2.05.54-2.99,0-.48-.27-1.08-.11-1.36.36l-3.03,5.2c-.13.23-.17.5-.1.76s.24.48.47.61c.93.53,1.48,1.48,1.48,2.53s-.55,2-1.48,2.53c-.23.13-.4.35-.47.61s-.03.53.1.76l3.03,5.2c.28.47.88.64,1.36.36.94-.54,2.05-.53,2.99,0,.92.53,1.46,1.48,1.46,2.53,0,.55.45,1,1,1h6.05c.55,0,1-.45,1-1,0-1.05.55-1.99,1.46-2.53.93-.54,2.05-.54,2.99,0,.48.27,1.09.11,1.36-.36l3.03-5.2c.13-.23.17-.5.1-.76s-.24-.48-.47-.61Z" /><circle cx="16" cy="16" r="6" fill="#4257ff" /></svg>
                                </div>
                                <p>Settings</p>
                            </Link>
                        </li>

                    </ul>
                </div>

        </div>
    )
}
