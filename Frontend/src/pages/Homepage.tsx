import { useState } from "react";
import Eventcard from "../components/Eventcard";

interface Event {
  id: number;
  title: string;
  type: string;
  description: string;
  club: string;
  date: string;
  venue: string;
  fee: string;
  status: "open" | "upcoming" | "closed";
}

const sampleEvents: Event[] = [
  {
    id: 1,
    title: "EMPNO 9.0",
    type: "STEM Workshop",
    description:
      "Flagship outreach program organized by IEEE MEC SB aimed at introducing students to engineering.",
    club: "IEEE MEC SB",
    date: "Aug 9,10",
    venue: "MEC",
    fee: "599/-",
    status: "open",
  },
  {
    id: 2,
    title: "Event Title",
    type: "Event Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    club: "Club",
    date: "Date",
    venue: "Venue",
    fee: "Date",
    status: "upcoming",
  },
];

const Homepage = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  return (
    <div className="homepage-container">
      <div style={{ paddingTop: "10px" }} className="container my-1">
        <div className="d-flex justify-content-center mb-4">
          <form className="mb-4" role="searchbox">
            <input
              className="form-control me-2 mx-auto"
              style={{ width: "200px" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        <div className="container my-4">
          <div className="d-flex align-items-center justify-content-center">
            <hr className="flex-grow-1" />
            <h2 className="mx-3">For You</h2>
            <hr className="flex-grow-1" />
          </div>
        </div>

        {events.length === 0 ? (
          <div className="alert alert-info text-start">
            No events available yet. Check back later!
          </div>
        ) : (
          <div className="row justify-content-start">
            {events.map((event) => (
              <div className="col-md-4" key={event.id}>
                <Eventcard
                  id={event.id}
                  title={event.title}
                  type={event.type}
                  description={event.description}
                  club={event.club}
                  date={event.date}
                  venue={event.venue}
                  fee={event.fee}
                  status={event.status}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
