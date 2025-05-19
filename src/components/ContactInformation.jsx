import React from "react";

export default function ContactInformation() {
    return (
        <main className="main">
            <h1>Contact Information</h1>

            <section className="content_section">
                <h2 className="section_header">How to Reach Us</h2>
                <address>
                    NTNU Campus<br />
                    Ålesund, Norway<br />
                    <a href="mailto:contact@stayfinder.com">contact@stayfinder.com</a>
                </address>
            </section>

            <section className="content_section">
                <h2 className="section_header">About the Project</h2>
                <p className="paragraph_text">
                    StayFinder is a school project built by students at NTNU for the Web Technologies course (IDATA2301).
                </p>
                <p className="paragraph_text">
                    The platform simulates hotel booking functionality for educational purposes only.
                </p>
            </section>
        </main>
    );
}
