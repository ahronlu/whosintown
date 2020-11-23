import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Card } from "react-bootstrap";

const EventItem = ({ event }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{event.venue.name}</Card.Title>
        <Card.Text>
          {moment(event.datetime).format("MMMM Do YYYY, h:mm")}
          <br />
          {event.venue.city}, {event.venue.country}
        </Card.Text>
        <Link to={`/events/${event.id}`}>
          Go to event <i className="fas fa-arrow-right"></i>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default EventItem;
