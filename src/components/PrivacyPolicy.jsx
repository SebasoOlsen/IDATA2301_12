import React from "react";
import './PrivacyPolicy.css';

/**
 * This React functional component renders the Privacy Policy page for the StayFinder project.
 *
 * @component
 * @returns {JSX.Element} A structured JSX layout of the privacy policy content
 */

export default function PrivacyPolicy() {
    return (
        <main className="main">
            <h1>Privacy Policy</h1>
            <p><strong>Last Updated:</strong> 5/7/2025</p>

            <section className="content_section">
                <h2 className="section_header">1. Information We Collect</h2>
                <p className="paragraph_text">
                    When you create an account or interact with the site, we may collect the following personal information:
                </p>
                <ul>
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                </ul>
                <p className="paragraph_text">You may also provide content in the form of hotel reviews.</p>
            </section>

            <section className="content_section">
                <h2 className="section_header">2. How We Use Your Information</h2>
                <p className="paragraph_text">
                    The information we collect is used solely for educational and demonstration purposes, including:
                </p>
                <ul>
                    <li>Simulating user accounts</li>
                    <li>Displaying user-generated reviews</li>
                    <li>Improving the functionality of the site</li>
                </ul>
                <p className="paragraph_text">No data is sold or used for commercial purposes.</p>
            </section>

            <section className="content_section">
                <h2 className="section_header">3. Data Storage and Security</h2>
                <p className="paragraph_text">
                    This is a school project; no sensitive information is stored. Basic security measures are in place.
                </p>
            </section>

            <section className="content_section">
                <h2 className="section_header">4. Sharing of Information</h2>
                <p className="paragraph_text">
                    Your personal information is not shared with any third parties. The data remains within the StayFinder project.
                </p>
            </section>

            <section className="content_section">
                <h2 className="section_header">5. Cookies and Tracking</h2>
                <p className="paragraph_text">
                    We use cookies only for authentication. A JWT is stored in an HTTP-only cookie to verify identity. No tracking for advertising is used.
                </p>
            </section>

            <section className="content_section">
                <h2 className="section_header">6. Your Rights</h2>
                <p className="paragraph_text">
                    Since this is a demo project, you may:
                </p>
                <ul>
                    <li>View the information associated with your account</li>
                    <li>Request account deletion</li>
                </ul>
            </section>


            <section className="content_section">
                <h2 className="section_header">7. Changes to This Policy</h2>
                <p className="paragraph_text">
                    We may update this policy. Changes will be posted on this page with an updated date.
                </p>
            </section>
        </main>
    );
}
