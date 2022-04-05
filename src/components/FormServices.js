import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useForm } from "../hooks/useForm";

const FormServices = ({ categories, handleAddService }) => {
  const initialValues = {
    id: Date.now(),
    name: "",
    description: "",
    category_id: "",
  };

  const [data, handleInputChange, reset] = useForm(initialValues);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      handleAddService(data);
      setValidated(false);
      reset();
    } else {
      setValidated(true);
      e.stopPropagation();
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Card>
        <Card.Body>
          <Card.Title>Servicio</Card.Title>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              autoFocus={true}
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un nombre
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={data.description}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese una descripción
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category_id"
              onChange={handleInputChange}
              value={data.category_id}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories &&
                categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Seleccione una categoría
            </Form.Control.Feedback>
          </Form.Group>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button type="submit" variant="primary">
            Guardar
          </Button>
          <Button onClick={reset} variant="danger">
            Cancelar
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};

export default FormServices;
