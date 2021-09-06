import { useSelector } from "react-redux";
import EventItem from "./EventItem";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <div>
      <h1 className="mb-4">Favorites</h1>
      <div>
        {favorites &&
          favorites.map((event) => <EventItem key={event.id} event={event} />)}
      </div>
    </div>
  );
};

export default Favorites;
