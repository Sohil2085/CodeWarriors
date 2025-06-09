import React from "react";
import { Container, Button } from "react-bootstrap";

const TagButtons = ({ tags, onClick }) => {
  return (
    <Container className="my-3">
      {tags.map((tag, index) => (
        <Button
          key={index}
          variant="outline-secondary"
          size="sm"
          className="m-1"
          onClick={() => onClick(tag)}
        >
          {tag}
        </Button>
      ))}
    </Container>
  );
};

export default TagButtons;
