import React from 'react';
import './EventInfoSection.css';
import DetailsCard from './DetailsCard';
type EventInfoSectionProps = {
  date: string;
  venue: string;
  organizer: string;
  posterUrl: string;
};


const EventInfoSection: React.FC<EventInfoSectionProps> = ({ date, venue, organizer, posterUrl }) => {
    return (
        <div className='info-section'>
    
            <div className='poster-container'>
                <img src={posterUrl} alt="Event Poster" className='event-poster' />
            </div>
          
            <div className='details-container'>
                <DetailsCard title="Date" value={date} />
                <DetailsCard title="Venue" value={venue} />
                <DetailsCard title="Organizer" value={organizer} />
            </div>
        </div>
    );
};

export default EventInfoSection;
