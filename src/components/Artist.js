import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import EventItem from "./EventItem";

const Artist = ({ artist }) => {
  const { events } = useSelector((state) => state.event);

  return (
    <div>
      {artist.name ? (
        <div className="d-flex align-items-center rounded border my-3">
          <Image
            src={artist.thumb_url}
            alt={artist.name}
            width="150px"
            className="mx-3"
          />
          <h3>{artist.name}</h3>
        </div>
      ) : null}
      {events &&
        events.map((event) => <EventItem key={event.id} event={event} />)}
    </div>
  );
};

export default Artist;
