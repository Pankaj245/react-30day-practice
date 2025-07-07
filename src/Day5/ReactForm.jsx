import { useState } from "react";
import validator from "validator";

const ReactForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleOnNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };
  const handleOnEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let emailValidation = validator.isEmail(email);
    let nameValidation = validator.isLength(name, { min: 8, max: 20 });
    setEmailError(!emailValidation);
    setNameError(!nameValidation);

    emailValidation && nameValidation && alert("data have been submitted");
  };
  return (
    <form className="form-container" onSubmit={handleOnSubmit}>
      <h2>Controlled Form</h2>
      <div className="name">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleOnNameChange}
          placeholder="Enter Name"
        />
        {nameError && (
          <p>
            Name sould be have minimum 8 characters, and maximum 20 charachters
            long.
          </p>
        )}
      </div>
      <div className="email">
        <input
          type="text"
          name="email"
          id="eamil"
          value={email}
          onChange={handleOnEmailChange}
          placeholder="Enter Email Id"
        />
        {emailError && <p>Please enter valid Email Id.</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactForm;
