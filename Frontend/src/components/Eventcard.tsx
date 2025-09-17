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
    <div className="card shadow-sm p-3 mb-4">
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
        <p className="card-text">{description}</p>
        <small className="text-muted float-end">Conducted by: {club}</small>

        <div className="d-flex flex-wrap gap-2 my-3">
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
