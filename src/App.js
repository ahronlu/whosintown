import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="p-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events/:id" component={Event} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
