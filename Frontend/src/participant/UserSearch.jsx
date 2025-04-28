import React from "react";
import { useState } from "react";

import axios from "axios";

function UserSearch() {
  const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    

  const handleSearch = async () => {
           try {
               const token = localStorage.getItem("token"); // Assuming you store token in localStorage
               if (!token) { 
                    console.log("Token not found in localStorage");
                    return;
               }

             const response = await axios.get(
               "http://localhost:3000/api/user/user-sreach",
               { email }, // email goes inside body
               {
                 headers: {
                   token: token,
                 },
               }
             );
             setUsers(response.data);
           } catch (error) {
             console.error("Error fetching users", error);
           }

  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Users by Email</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Search
      </button>

      <div className="mt-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="border p-2 my-2 rounded shadow">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
