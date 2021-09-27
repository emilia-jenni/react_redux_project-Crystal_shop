import React from "react";
import Card from "react-bootstrap/Card";
import "../App.scss";

const Crystal = ({ title, image, description, price }) => {
  return (
    <div className="crystalsingle">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Subtitle>{price}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Crystal;
