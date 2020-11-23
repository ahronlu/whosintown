import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getArtist } from "../actions/artistActions";
import { getEvents } from "../actions/eventActions";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const search = async (e) => {
    e.preventDefault();
    dispatch(getArtist(term));
    dispatch(getEvents(term));
  };
  return (
    <form onSubmit={search}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Enter a band or a singer"
      />
    </form>
  );
};

export default SearchForm;
