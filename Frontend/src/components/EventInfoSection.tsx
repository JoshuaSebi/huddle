import React from 'react';
import './EventInfoSection.css';
import eventPoster from '../assets/poster.png'; // 
import DetailsCard from './DetailsCard';


const EventInfoSection: React.FC = () => {
    return (
        <div className='info-section'>
    
            <div className='poster-container'>
                <img src={eventPoster} alt="Event Poster" className='event-poster' />
            </div>
          
            <div className='details-container'>
                <DetailsCard title="Event Name" value="EMPNEO 9.0" />
                <DetailsCard title="Date" value="March 15, 2023" />
                <DetailsCard title="Location" value="New York, NY" />
            </div>
        </div>
    );
};

export default EventInfoSection;
