import React from 'react'
// import ErrorCSS from "../Error/error.css"
import errorImage from "../Error/images/erroe.svg"

export default function Error() {
    return (
        // used for the opaque background
        <div className="error">

            {/* error info area */}
            <section className="errorfield">
                <img src={errorImage} alt="error icon" />
                <p>
                   The Search Field Cannot be an Empty String
                </p>
            </section>

        </div>
    )
}
