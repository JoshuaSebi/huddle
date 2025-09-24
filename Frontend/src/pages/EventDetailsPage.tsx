import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventDetailsPage.css";

import EventInfoSection from "../components/EventInfoSection";
import EventDescription from "../components/EventDescription";
import RegistrationSection from "../components/Registersection";

import { EventData } from "./EventDetailsPage.types";

const EventDetailsPage: React.FC = () => {
  const [event, setEvent] = useState<EventData | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`https://api.my-events.com/events/${id}`);

        if (!response.ok) {
          throw new Error("Event data could not be found.");
        }

        const data: EventData = await response.json();
        setEvent(data);
      } catch (err) {
        setError("Failed to fetch event data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEventData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="event-page-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="event-page-container">
        <p>{error}</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-page-container">
        <p>Event not found.</p>
      </div>
    );
  }

  return (
    <div className="event-page-container">
      <h1 className="event-title">{event.name}</h1>

      <EventInfoSection
        date={event.date}
        venue={event.venue}
        organizer={event.organizer}
        posterUrl={event.posterUrl}
      />
      <EventDescription description={event.description} />
      <RegistrationSection fee={event.registrationFee} />
    </div>
  );
};

export default EventDetailsPage;
