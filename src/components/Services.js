import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "./Service";

const Services = ({
  services,
  filter,
  categories,
  handleUpdate,
  handleDelete,
}) => {
  const itemsFilter =
    filter == 0
      ? services
      : services.filter((item) => item.category_id === filter);

  return (
    <Row>
      {itemsFilter.length > 0 ? (
        itemsFilter.map((item) => (
          <Service
            key={item.id}
            item={item}
            categories={categories}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <Col>
          <h3>No se han registrado Servicios</h3>
        </Col>
      )}
    </Row>
  );
};

export default Services;
