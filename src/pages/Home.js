import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Artist from "../components/Artist";

import Favorites from "../components/Favorites";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const { artist, loading } = useSelector((state) => state.artist);

  return (
    <Row>
      <Col>
        <h1 className="mb-3">Who's In Town?</h1>
        <SearchForm />
        {loading ? (
          <i className="fas fa-cog fa-spin"></i>
        ) : (
          artist && <Artist artist={artist} />
        )}
      </Col>
      <Col>
        <Favorites />
      </Col>
    </Row>
  );
};

export default Home;
