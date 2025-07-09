import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";

const Reusable = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  return (
    <div>
      <div className="buttons">
        <Button variant="primary" size="lg">
          Submit
        </Button>
        <br />
        <Button variant="danger" size="sm" onClick={() => alert("Deleted!")}>
          Delete
        </Button>
        <br />
        <Button variant="outline">Cancel</Button>
      </div>
      <Input
        label="Username"
        name="username"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={usernameError}
      />
      <Card
        title="React Developer"
        subtitle="Frontend Specialist"
        image="https://images.pexels.com/photos/31360998/pexels-photo-31360998.jpeg"
        bordered
        onClick={() => console.log("Card Clicked!")}
      >
        <p>
          This card is fully reusable and supports title, subtitle, and
          children.
        </p>
      </Card>
    </div>
  );
};

export default Reusable;
