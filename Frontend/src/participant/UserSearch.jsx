import React, { useState } from "react";
import axios from "axios";

function UserSearch() {
  const [emails, setEmails] = useState([""]); // Initially one input
  const [teamname, setTeamname] = useState("");

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleAddEmailInput = () => {
    setEmails([...emails, ""]);
  };

  const handleRemoveEmailInput = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  const handleSubmitTeam = async () => {
    const filteredEmails = emails.filter((email) => email.trim() !== "");

    if (!teamname || filteredEmails.length === 0) {
      alert(
        "Please enter a team name and at least one valid participant email."
      );
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found in localStorage");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/user/user-sreach",
        {
          teamname: teamname,
          emails: filteredEmails,
        },
        {
          headers: { token: token },
        }
      );

      console.log("Team registered successfully:", response.data);
      alert("Team registered successfully!");

      // Clear all inputs
      setTeamname("");
      setEmails([""]);
    } catch (error) {
      console.error("Error registering team", error);
      alert("Failed to register team");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Team</h1>

      {/* Team Name Input */}
      <div className="mb-4">
        <input
          type="text"
          value={teamname}
          onChange={(e) => setTeamname(e.target.value)}
          placeholder="Enter team name"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Dynamic Email Inputs */}
      <div className="mb-4">
        {emails.map((email, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              placeholder="Enter participant email"
              className="border p-2 w-full rounded"
            />
            {emails.length > 1 && (
              <button
                onClick={() => handleRemoveEmailInput(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          onClick={handleAddEmailInput}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add More Email
        </button>
      </div>

      {/* Submit Button */}
      {emails.length > 0 && (
        <button
          onClick={handleSubmitTeam}
          className="bg-green-500 text-white p-2 rounded w-full mt-4"
        >
          Register Team
        </button>
      )}
    </div>
  );
}

export default UserSearch;
