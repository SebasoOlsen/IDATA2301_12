import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>About Stay Finder</h4>
          <p>Your premier destination for comparing hotel prices across multiple providers.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>NTNU Campus<br />Ålesund, Norway<br />contact@stayfinder.com</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>Privacy Policy<br />Terms of Use<br />Cookie Settings</p>
        </div>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <p>
          This website is a result of a university group project, performed in the course IDATA2301 Web technologies at NTNU. All information is fictional.
        </p>
      </div>
    </footer>
  );
}
