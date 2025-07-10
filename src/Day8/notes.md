# 📅 Day 9 – React `useEffect` in Depth: Fetch API Data with Cleanup

---

## 🔍 What is `useEffect`?

The `useEffect` hook is used to perform **side effects** in functional components.

### ✨ Side effects include:

- Fetching data
- Setting up event listeners
- Updating the DOM manually
- Subscribing/unsubscribing to services

---

## 🧠 Basic Syntax

```js
useEffect(() => {
  // Side effect logic here

  return () => {
    // Optional cleanup logic
  };
}, [dependencies]);
```

---

## 🎯 Goal for the Day

- ✅ Fetch data from `https://jsonplaceholder.typicode.com/users`
- ✅ Display it in a list
- ✅ Show loading and error states
- ✅ Abort fetch on component unmount (cleanup)

---

## 📦 Final Code Example: `UserList.jsx`

```jsx
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // 🧹 Cleanup to abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List (useEffect)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

---

## 🧹 Why Cleanup is Important

Without proper cleanup:

- You risk memory leaks
- You may update state on unmounted components (React will warn)

### ✅ Solution:

Use `AbortController` to cancel pending fetch:

```js
const controller = new AbortController();
...
return () => controller.abort();
```

---

## ✅ Best Practices

| ✅ Best Practice                    | 💡 Tip                                     |
| ----------------------------------- | ------------------------------------------ |
| Use `async` inside effect           | Don't mark `useEffect` as `async` directly |
| Cancel fetch with `AbortController` | Prevent memory leaks                       |
| Handle loading & error states       | Show user feedback                         |
| Keep dependency array clean         | Include only needed dependencies           |
| Separate logic from render          | Use functions inside the effect            |

---

## 🧩 Bonus Challenge

> **Add a dropdown** to select a user ID, and on selection fetch their posts from:
>
> `https://jsonplaceholder.typicode.com/posts?userId=<id>`

---

## 📚 Summary

- `useEffect` is key for side effects
- It replaces lifecycle methods like:
  - `componentDidMount`
  - `componentWillUnmount`
  - `componentDidUpdate`
- Combine it with fetch and `AbortController` for production-ready logic

---

_React mastery is built one hook at a time 🔥_
