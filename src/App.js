import React, { useState, useReducer, useEffect } from "react";

import Filter from "./components/Filter";
import Services from "./components/Services";
import FormServices from "./components/FormServices";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { serviceReducer, init } from "./reducers/serviceReducer";

function App() {
  const [filter, setFilter] = useState(0);

  const [services, dispatch] = useReducer(serviceReducer, [], init);

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  const handleAddService = (newService) => {
    dispatch({
      type: "add",
      payload: newService,
    });
  };
  const handleUpdate = (service) => {
    dispatch({
      type: "update",
      payload: service,
    });
  };

  const handleDelete = (serviceId) => {
    const action = {
      type: "delete",
      payload: serviceId,
    };

    dispatch(action);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-4">
        <Col sm="auto">
          <h1>Servicios</h1>
        </Col>
      </Row>
      <Row>
        <Col className="p-2 bg-light">
          <Filter categories={categories} setFilter={setFilter} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm={9}>
          <Services
            services={services}
            filter={filter}
            categories={categories}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </Col>
        <Col sm={3}>
          <FormServices
            categories={categories}
            handleAddService={handleAddService}
          />
        </Col>
      </Row>
    </Container>
  );
}

const categories = [
  { id: 1, name: "Autos" },
  { id: 2, name: "Salud" },
  { id: 3, name: "Hogar" },
];

export default App;
