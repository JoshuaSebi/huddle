import React from "react";

interface EventcardProps {
  id: number;
  title: string;
  type: string;
  date: string;
  venue: string;
  description: string;
  club: string;
  fee: string;
  status: "open" | "upcoming" | "closed";
}

const Eventcard: React.FC<EventcardProps> = ({
  id,
  title,
  type,
  description,
  club,
  date,
  venue,
  fee,
  status,
}) => {
  const getStatusButton = () => {
    if (status === "open")
      return <button className="btn btn-primary">Apply Now</button>;
    if (status === "upcoming")
      return (
        <button className="btn btn-secondary" disabled>
          Coming Soon
        </button>
      );
    return (
      <button className="btn btn-secondary" disabled>
        Closed
      </button>
    );
  };

  return (
    <div className="card p-3 mb-4 shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5
            className="card-title text-primary fw-bold"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </h5>
          <small className="text-muted">Conducted by: {club}</small>
        </div>

        <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
        <p className="card-text">{description}</p>

        <div className="d-flex gap-3 mb-3">
          <span className="badge bg-light text-dark">{date}</span>
          <span className="badge bg-light text-dark">{venue}</span>
          <span className="badge bg-light text-dark">{fee}</span>
        </div>

        {getStatusButton()}
      </div>
    </div>
  );
};

export default Eventcard;
