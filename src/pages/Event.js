import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Card } from "react-bootstrap";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favoritesActions";
import EventMap from "../components/EventMap";

const Event = ({ match }) => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState(null);
  const { events } = useSelector((state) => state.event);
  const { favorites } = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.id === match.params.id);

  const getEvent = () => {
    isFavorite
      ? setEvent(favorites.find((e) => e.id === match.params.id))
      : setEvent(events.find((e) => e.id === match.params.id));
  };

  useEffect(() => {
    getEvent();
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    isFavorite
      ? dispatch(removeFromFavorites(event))
      : dispatch(addToFavorites(event));
  };

  return (
    <>
      <div className="d-flex mb-5">
        <h1>
          <Link to="/">Who's In Town?</Link>
        </h1>
        <i
          onClick={handleClick}
          className={`fa${isFavorite ? "s" : "r"} fa-heart`}
        ></i>
      </div>
      {event && (
        <>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                {moment(event.datetime).format("MMMM Do YYYY, h:mm")}
              </Card.Title>
              <Card.Text>
                {event.lineup.map((a, i) =>
                  i < event.lineup.length - 1 ? a + ", " : a + "."
                )}
              </Card.Text>
              <a href={event.url} target="_blank" rel="noreferrer">
                Link to event
              </a>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{event.venue.name}</Card.Title>
              <Card.Text>
                {event.venue.city}, {event.venue.country}
              </Card.Text>
            </Card.Body>
          </Card>
          {event.offers.length ? (
            <Card className="mb-3">
              {event.offers.map((offer) => (
                <Card.Body>
                  <Card.Title>
                    <a href={offer.url} target="_blank" rel="noreferrer">
                      {offer.type}
                    </a>
                  </Card.Title>
                  <Card.Text>{offer.status}</Card.Text>
                </Card.Body>
              ))}
            </Card>
          ) : null}
          <Card>
            <EventMap
              position={[event.venue.latitude, event.venue.longitude]}
              name={event.venue.name}
            />
          </Card>
        </>
      )}
    </>
  );
};

export default Event;
