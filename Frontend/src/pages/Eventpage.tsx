import { useState } from "react";
import Eventcard from "../components/Eventcard";

const eventList = [
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
    title: "Advanced AI Talk",
    type: "Webinar",
    description:
      "A deep dive into machine learning applications in embedded systems.",
    club: "IEEE MEC SB",
    date: "Aug 15",
    venue: "Online",
    fee: "Free",
    status: "upcoming",
  },
];

const Eventpage = () => {
  const [events] = useState(eventList);

  const renderEventsByStatus = (status: "open" | "upcoming" | "closed") => {
    const filtered = events.filter((event) => event.status === status);

    if (filtered.length === 0) {
      return (
        <div className="alert alert-info text-start">
          No {status} events available yet. Check back later!
        </div>
      );
    }

    return (
      <div className="row justify-content-start">
        {filtered.map((event) => (
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
    );
  };

  return (
    <div>
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
      </div>

      {/* Open */}
      <div className="container my-4">
        <div className="d-flex align-items-start justify-content-center">
          <hr className="flex-grow-1" />
          <h2 className="mx-3">Open</h2>
          <hr className="flex-grow-1" />
        </div>
        {renderEventsByStatus("open")}
      </div>

      {/* Upcoming */}
      <div className="container my-4">
        <div className="d-flex align-items-start justify-content-center">
          <hr className="flex-grow-1" />
          <h2 className="mx-3">Upcoming</h2>
          <hr className="flex-grow-1" />
        </div>
        {renderEventsByStatus("upcoming")}
      </div>

      {/* Closed */}
      <div className="container my-4">
        <div className="d-flex align-items-start justify-content-center">
          <hr className="flex-grow-1" />
          <h2 className="mx-3">Closed</h2>
          <hr className="flex-grow-1" />
        </div>
        {renderEventsByStatus("closed")}
      </div>
    </div>
  );
};

export default Eventpage;
