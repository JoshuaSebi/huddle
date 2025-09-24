import React from 'react';
import './EventDescription.css'; 
type EventDescriptionProps = {
    description: string[];
};

const EventDescription: React.FC<EventDescriptionProps> = ({ description }) => {
    return (
        <div className="description-container">
            {description.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default EventDescription;