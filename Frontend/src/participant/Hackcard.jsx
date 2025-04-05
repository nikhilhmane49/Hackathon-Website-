import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from '../context/contextpra';


export default function Hackcard() {
  const navigate = useNavigate();

  const hackathons = [
    {
      _id: "1",
      hackathonName: "CodeSprint 2025",
      prizePool: "$10,000",
      startDate: "2025-05-01T00:00:00Z",
      endDate: "2025-05-03T00:00:00Z",
      logo: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      teamSize: { min: 2, max: 5 },
      mode: "online",
      collegeAddress: "IIT Bombay, India",
    },
    {
      _id: "2",
      hackathonName: "DevHack Global",
      prizePool: "$25,000",
      startDate: "2025-06-10T00:00:00Z",
      endDate: "2025-06-12T00:00:00Z",
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      teamSize: { min: 1, max: 4 },
      mode: "offline",
      collegeAddress: "MIT, USA",
    },
    {
      _id: "3",
      hackathonName: "AI Storm",
      prizePool: "$50,000",
      startDate: "2025-07-15T00:00:00Z",
      endDate: "2025-07-17T00:00:00Z",
      logo: "https://cdn-icons-png.flaticon.com/512/190/190406.png",
      teamSize: { min: 3, max: 6 },
      mode: "online",
      collegeAddress: "Stanford University, USA",
    },
    {
      _id: "4",
      hackathonName: "Hack the Future",
      prizePool: "$5,000",
      startDate: "2025-04-25T00:00:00Z",
      endDate: "2025-04-27T00:00:00Z",
      logo: "https://cdn-icons-png.flaticon.com/512/2305/2305940.png",
      teamSize: { min: 2, max: 3 },
      mode: "offline",
      collegeAddress: "BITS Pilani, India",
    },
  ];

  const { Hackton, listhackton, backendurl, token, settoken } =
    useContext(Appcontext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Hackton.map((hackathon) => (
        <div
          key={hackathon._id}
          onClick={() => navigate(`/hackathon/${hackathon._id}`)}
          className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer p-5 flex flex-col gap-4"
        >
          <div className="flex justify-center">
            <img
              src={hackathon.logo}
              alt={hackathon.hackathonName}
              className="h-20 w-20 object-contain bg-gray-100 rounded-lg shadow-sm"
            />
          </div>

          <div className="text-center space-y-1">
            <h3 className="text-2xl font-semibold text-blue-700">
              {hackathon.hackathonName}
            </h3>

            <p className="text-gray-700 font-medium text-sm">
              🏆 Prize Pool:{" "}
              <span className="text-green-600 font-bold text-base">
                {hackathon.prizePool}
              </span>
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg text-sm space-y-1">
            <p className="text-gray-600">
              📅 <span className="font-semibold">Start:</span>{" "}
              {new Date(hackathon.startDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              📅 <span className="font-semibold">End:</span>{" "}
              {new Date(hackathon.endDate).toLocaleDateString()}
            </p>
          </div>

          <div className="text-sm space-y-1 text-gray-600">
            <p>
              👥 <span className="font-semibold">Team Size:</span>{" "}
              {hackathon.teamSize?.min ?? "?"} –{" "}
              {hackathon.teamSize?.max ?? "?"}
            </p>

            <p>
              🌐 <span className="font-semibold">Mode:</span>{" "}
              <span
                className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold ${
                  hackathon.mode === "online" ? "bg-blue-500" : "bg-orange-500"
                }`}
              >
                {hackathon.mode}
              </span>
            </p>
            <p>
              📍 <span className="font-semibold">Location:</span>{" "}
              {hackathon.collegeAddress}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
