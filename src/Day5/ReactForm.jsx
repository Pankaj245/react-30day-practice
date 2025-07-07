import { useState } from "react";
import validator from "validator";

const ReactForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });

  const handleOnChange = (e) => {
    const { name, value } = e;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };
  const validation = () => {
    let emailValid = validator.isEmail(form?.email);
    let nameValid = validator.isLength(form?.name, { min: 8, max: 20 });
    setErrors({
      name: !nameValid,
      email: !emailValid,
    });
    return emailValid && nameValid;
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    validation() && alert("data have been submitted");
  };
  return (
    <form className="form-container" onSubmit={handleOnSubmit}>
      <h2>Controlled Form</h2>
      <div className="name">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={form?.name}
            onChange={handleOnChange}
            placeholder="Enter Name"
          />
        </div>
        {errors?.name && (
          <p>
            Name should be have minimum 8 characters, and maximum 20 characters
            long.
          </p>
        )}
      </div>
      <div className="email">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={form?.email}
            onChange={handleOnChange}
            placeholder="Enter Email Id"
          />
        </div>
        {errors.email && <p>Please enter valid Email Id.</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactForm;
