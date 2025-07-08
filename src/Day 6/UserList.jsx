import { useEffect, useState } from "react";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="user-container">
      <h2>User List</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
