import React from 'react';
import './EventDescription.css'; 

const EventDescription: React.FC = () => {
    return (
        <div className="description-container">
            <p>
                The wait is over... Your invitation to the magical halls of EMPNEO 9.0 has flown in! This
                isn't just a conclave — it's a journey into enchantment, discovery, and creativity beyond
                the ordinary.
            </p>
            <p>
                Step onto your own Platform 9¾… leave the Muggle world behind and unlock new
                adventures. Cast your curiosity into workshops, face thrilling challenges, and dive into
                games that ignite your imagination. Gather your friends, sharpen your minds — this
                August, the magic is yours to make.
            </p>
            <p className="highlight-text">
                <span className="plus-icon">+</span>
                As part of this magical experience, participants will also be taken on an Industrial
                Visit to Kochi Robotics Club, where they'll get a firsthand look into the world of robotics,
                automation, and STEM innovation!
            </p>
        </div>
    );
};

export default EventDescription;