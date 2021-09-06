import { Link } from "react-router-dom";
import moment from "moment";
import { Card } from "react-bootstrap";

const EventItem = ({ event }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{event.venue.name}</Card.Title>
        <Card.Text>
          {event.venue.city}, {event.venue.country}
          <br />
          {moment(event.datetime).format("MMMM Do YYYY, h:mm")}
        </Card.Text>
        <Link to={`/events/${event.id}`}>
          Go to event <i className="fas fa-arrow-right"></i>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default EventItem;
