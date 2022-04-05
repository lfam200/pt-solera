import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "../hooks/useForm";

const EditService = ({
  item,
  showModal,
  categories,
  handleUpdate,
  handleClose,
}) => {
  const initialValues = {
    id: item.id,
    name: item.name,
    description: item.description,
    category_id: item.category_id,
  };

  const [data, handleInputChange] = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(data);
    handleClose();
  };
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              autoFocus={true}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category_id"
              onChange={handleInputChange}
              value={data.category_id}
            >
              <option value="">Selecciona una categoría</option>
              {categories &&
                categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditService;
