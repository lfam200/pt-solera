import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import EditService from "./EditService";

const Service = ({ item, categories, handleUpdate, handleDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Col className="mb-2" sm={12} md={6} lg={4}>
      <Card>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleShow}>
            Editar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(item.id)}>
            Eliminar
          </Button>
        </Card.Footer>
      </Card>

      <EditService
        item={item}
        showModal={showModal}
        categories={categories}
        handleUpdate={handleUpdate}
        handleClose={handleClose}
      />
    </Col>
  );
};

export default Service;
