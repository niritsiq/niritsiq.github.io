import React from 'react';
import './Honors.css';
import { FaTrophy } from 'react-icons/fa';

const Honors = () => {
    const awards = [
        {
            title: 'Excellent Investigator Award',
            organization: 'Colonel MPIU Commander',
            date: '08/2021',
            icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176355.png'
        },
        {
            title: 'Excellent Investigator Award',
            organization: 'Israel Security Agency and Lt. Col. 433',
            date: '06/2022',
            icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176371.png'
        }
    ];

    return (
        <section id="honors" className="section">
            <FaTrophy className="honors-trophy trophy-1" />
            <FaTrophy className="honors-trophy trophy-2" />
            <div className="container">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2791/2791592.png"
                    alt="Awards"
                    className="section-image"
                    data-aos="zoom-in"
                />
                <h2 data-aos="fade-down">Honors & Awards</h2>
                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div key={index} className="award-card" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                            <img src={award.icon} alt="Award" className="award-icon" />
                            <h3>{award.title}</h3>
                            <p>{award.organization}</p>
                            <p className="award-date">{award.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Honors; 