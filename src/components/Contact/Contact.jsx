import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const contactInfo = {
        name: 'Nir Itzik',
        email: 'niritzik23@gmail.com',
        phone: '054-268-9598',
        location: 'Israel',
        linkedin: 'https://www.linkedin.com/in/nir-itzik-2556b329a/'
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${contactInfo.email}`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${contactInfo.phone}`;
    };

    return (
        <section id="contact" className="section">
            <div className="contact-wrapper">
                <div className="contact-header">
                    <h1>{contactInfo.name}</h1>
                </div>

                <div className="contact-info">
                    <div className="contact-item" onClick={handleEmailClick}>
                        <FaEnvelope className="contact-icon" />
                        <span>{contactInfo.email}</span>
                    </div>

                    <div className="contact-divider">|</div>

                    <div className="contact-item" onClick={handlePhoneClick}>
                        <FaPhone className="contact-icon" />
                        <span>{contactInfo.phone}</span>
                    </div>

                    <div className="contact-divider">|</div>

                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span>{contactInfo.location}</span>
                    </div>

                    <div className="contact-divider">|</div>

                    <div className="contact-item">
                        <a
                            href={contactInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link"
                        >
                            <FaLinkedinIn className="contact-icon" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 