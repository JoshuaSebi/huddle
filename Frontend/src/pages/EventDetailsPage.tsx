import React from 'react';
import './EventDetailsPage.css';
import eventPoster from '../assets/poster.png';
import DetailsCard from '../components/DetailsCard';
import EventInfoSection from '../components/EventInfoSection';
import EventDescription from '../components/EventDescription';
import RegisterSection from '../components/Registersection';

const EventDetailsPage: React.FC = () => {
  return (
    <div className="event-page-container">
      <h1 className="event-title">EMPNEO 9.0</h1>
      <EventInfoSection />
      <EventDescription />
      <RegisterSection />
    </div>
  );
};


export default EventDetailsPage;
