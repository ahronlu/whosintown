import axios from "axios";

const url = "https://rest.bandsintown.com/artists";

export const getArtist = async (name) => {
  try {
    const { data } = await axios(`${url}/${name}?app_id=1`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getEvents = async (name) => {
  try {
    const { data } = await axios(`${url}/${name}/events?app_id=1&date=all`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
