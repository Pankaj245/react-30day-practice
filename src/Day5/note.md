# 🧩 Controlled vs. Uncontrolled Components in React

---

## 🧩 What is a Controlled Component?

A **controlled component** is a form element whose value is managed by React state. It allows full control over the input, making it ideal for validation, conditional logic, and dynamic behavior.

### ✅ Example

```jsx
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

### 📌 In this example:

- The input field's value is always synced with React state.
- You control it using both `value` and `onChange`.

---

## 🧩 What is an Uncontrolled Component?

An **uncontrolled component** handles its own state internally. React does not manage its value directly; instead, you use **refs** to access the data when needed.

### ✅ Example

```jsx
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </>
  );
}
```

### 📌 In this example:

- The input keeps track of its own value internally.
- You access the value through a `ref` only when needed (e.g., on button click).

---

## 🧑‍🏫 When to Use What?

### ✅ Use Controlled Components When:

- You need **form validation**.
- You want **real-time feedback** (e.g., live search).
- You need to **reset or programmatically update values**.
- You want consistent state across components.

### ✅ Use Uncontrolled Components When:

- You're **integrating with third-party libraries**.
- You need a **simple, fast input** (e.g., search bars).
- **Performance is critical** in large forms.

---

## 🧼 Best Practices for Inputs

### ✅ Controlled Inputs

- Always use `value` and `onChange` together.
- Debounce inputs for better performance in complex apps.
- Validate on **change** or **blur** based on use case.
- Group related fields into an object for better state management:

```jsx
const [formData, setFormData] = useState({ name: "", email: "" });
```

- Use **reusable `<Input>` components** to promote consistency.

### ✅ Uncontrolled Inputs

- Use `ref` only for **occasional reads**, not on every keystroke.
- Prefer `defaultValue` instead of `value` for initialization.
- Avoid mixing controlled and uncontrolled behavior in the same input.

---

## 📊 Quick Reference Table

| ✅ **Best Practice**                     | 💡 **Tip**                                       |
| ---------------------------------------- | ------------------------------------------------ |
| **Use controlled inputs**                | Always bind with `value` and `onChange`          |
| **Use object states for forms**          | Easier to manage as the form grows               |
| **Use a single change handler**          | Keep your code DRY (Don't Repeat Yourself)       |
| **Use semantic HTML (`<label>`)**        | Improves accessibility and screen reader support |
| **Validate using `validator` or `Yup`**  | Keeps validation logic clean and separate        |
| **Create reusable `<Input>` components** | Ensures consistency and simplifies maintenance   |

---
