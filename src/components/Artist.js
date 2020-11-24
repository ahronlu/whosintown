import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import EventItem from "./EventItem";

const Artist = ({ artist }) => {
  const { events } = useSelector((state) => state.event);
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      {artist.name ? (
        <div className="d-flex align-items-center rounded border my-3">
          <Image
            onClick={() => setShowImage(true)}
            src={artist.thumb_url}
            alt={artist.name}
            title={artist.name}
            width="150px"
            className="mx-3"
          />
          <Modal show={showImage} onHide={() => setShowImage(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{artist.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={artist.image_url} alt={artist.name} fluid />
            </Modal.Body>
          </Modal>
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
