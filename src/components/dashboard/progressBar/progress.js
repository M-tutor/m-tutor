import React from 'react';
import './progress.css';

function ProgressBar({ percentage }) {
    return (
        <div className="progress-bar-container">
            <div className="progress" style={{ width: `${percentage}%` }}>
                {/* Inner content can be added if required */}
            </div>
            <span className="progress-text">{percentage}/100</span>
        </div>
    );
}

export default ProgressBar;
