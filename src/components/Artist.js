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
            title={artist.name}
            width="150px"
            className="mx-3"
          />
          <a
            href={artist.url}
            target="_blank"
            rel="noreferrer"
            title={`${artist.name}'s bandsintown page`}
          >
            <h3>{artist.name}</h3>
          </a>
          <a
            href={artist.facebook_page_url}
            target="_blank"
            rel="noreferrer"
            title={`${artist.name}'s facebook page`}
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
      ) : null}
      {events &&
        events.map((event) => <EventItem key={event.id} event={event} />)}
    </div>
  );
};

export default Artist;
