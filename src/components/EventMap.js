import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leafGreen from "./assets/leaf-green.png";
import leafShadow from "./assets/leaf-shadow.png";

const myIcon = L.icon({
  iconUrl: leafGreen,
  shadowUrl: leafShadow,
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76],
});

const EventMap = ({ position, name }) => {
  return (
    <MapContainer
      center={position}
      zoom={23}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default EventMap;
