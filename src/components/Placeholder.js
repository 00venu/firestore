import React from "react";
import { Placeholder } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const PlaceholderExampleGrid = () => (
  <div
    style={{
      padding: "10px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      margin: "10px",
      height: "100px",
    }}
  >
    <Placeholder style={{ width: "170px" }}>
      <Placeholder.Header>
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  </div>
);

export default PlaceholderExampleGrid;
