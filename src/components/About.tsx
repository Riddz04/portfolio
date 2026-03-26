import React from 'react';
import { GitHubIcon } from './GitHubIcon';
import activityImage from './Screenshot 2026-03-26 at 20.20.51.png';

const About = () => {
    return (
        <div style={{ color: 'var(--light-navy)' }}>
            <h2>About Me</h2>
            <p>Your about me text goes here.</p>
            <div style={{ backgroundColor: 'var(--lightest-navy)', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                <h3>GitHub Activity</h3>
                <img
                    src={activityImage}
                    alt="GitHub activity representation"
                    style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
                    loading="lazy"
                />
                <p>
                    Check my GitHub profile: 
                    <a href="https://github.com/Riddz04" style={{ color: 'var(--green)', textDecoration: 'underline' }}>
                        <GitHubIcon /> Riddz04
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;