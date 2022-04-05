import React from "react";
import Nav from "react-bootstrap/Nav";

const Filter = ({ categories, setFilter }) => {
  const handleSelect = (eventeKey) => {
    setFilter(eventeKey);
  };

  return (
    <Nav variant="pills" defaultActiveKey={0} onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey={0}>Todos</Nav.Link>
      </Nav.Item>
      {categories &&
        categories.map((cat) => (
          <Nav.Item key={cat.id}>
            <Nav.Link eventKey={cat.id}>{cat.name}</Nav.Link>
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default Filter;
