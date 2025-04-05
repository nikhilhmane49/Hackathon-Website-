// Frontend - Profile.jsx
import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    resume: "",
    githubLink: "",
    linkedinLink: "",
    technicalSkills: "",
    projectLinks: "",
    education: { college: "", degree: "", year: "" }, // Removed 'type' field
    contactNumber: "",
  });

  const [resumeName, setResumeName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id in formData.education) {
      setFormData({
        ...formData,
        education: { ...formData.education, [id]: value },
      });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, resume: file });
      setResumeName(file.name);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    
    try {
      // Format data for API
      const userData = new FormData();
      
      // Add basic fields
      userData.append("name", formData.name);
      userData.append("email", formData.email);
      userData.append("bio", formData.bio);
      userData.append("githubLink", formData.githubLink);
      userData.append("linkedinLink", formData.linkedinLink);
      userData.append("contactNumber", formData.contactNumber);
      
      // Fix for arrays - convert to JSON strings
      const technicalSkills = formData.technicalSkills
        .split(",")
        .map(skill => skill.trim())
        .filter(Boolean);
      
      const projectLinks = formData.projectLinks
        .split(",")
        .map(link => link.trim())
        .filter(Boolean);
      
      userData.append("technicalSkills", JSON.stringify(technicalSkills));
      userData.append("projectLinks", JSON.stringify(projectLinks));
      
      // Fix for education - send as JSON string
      const education = {
        college: formData.education.college,
        degree: formData.education.degree,
        year: formData.education.year ? Number(formData.education.year) : undefined
      };
      
      userData.append("education", JSON.stringify(education));
      
      // Handle file upload
      if (formData.resume) {
        userData.append("resume", formData.resume);
      }

      const token = localStorage.getItem('token');
      // Send to API
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/user-update`, userData, {
        headers: {
          token: token,
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log("API Response:", response.data);
      setSuccess(true);
      
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      bio: "",
      resume: "",
      githubLink: "",
      linkedinLink: "",
      technicalSkills: "",
      projectLinks: "",
      education: { college: "", degree: "", year: "" },
      contactNumber: "",
    });
    setResumeName("");
    setError("");
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-10 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Create Your Profile
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Boost your presence with a professional-looking profile.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Profile updated successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: "name",
                icon: <FaUser />,
                label: "Full Name",
                type: "text",
              },
              {
                id: "email",
                icon: <FaEnvelope />,
                label: "Email",
                type: "email",
              },
              {
                id: "contactNumber",
                icon: <FaPhone />,
                label: "Contact Number",
                type: "tel",
              },
            ].map(({ id, icon, label, type }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
                >
                  {icon} {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            ))}
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            ></textarea>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-4">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="college" className="text-sm font-semibold text-gray-700 mb-1">College/University</label>
                <input
                  type="text"
                  id="college"
                  value={formData.education.college}
                  onChange={handleChange}
                  placeholder="College Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label htmlFor="degree" className="text-sm font-semibold text-gray-700 mb-1">Degree</label>
                <input
                  type="text"
                  id="degree"
                  value={formData.education.degree}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech, MBA"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label htmlFor="year" className="text-sm font-semibold text-gray-700 mb-1">Graduation Year</label>
                <input
                  type="number"
                  id="year"
                  value={formData.education.year}
                  onChange={handleChange}
                  placeholder="Year"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: "githubLink",
                icon: <FaGithub />,
                placeholder: "GitHub Profile URL",
              },
              {
                id: "linkedinLink",
                icon: <FaLinkedin />,
                placeholder: "LinkedIn Profile URL",
              },
            ].map(({ id, icon, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"
                >
                  {icon} {id === "githubLink" ? "GitHub" : "LinkedIn"}
                </label>
                <input
                  type="url"
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            ))}
          </div>

          {/* Skills & Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="technicalSkills"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Technical Skills (comma-separated)
              </label>
              <input
                type="text"
                id="technicalSkills"
                value={formData.technicalSkills}
                onChange={handleChange}
                placeholder="React, Node.js, Tailwind, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="projectLinks"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Project Links (comma-separated)
              </label>
              <input
                type="text"
                id="projectLinks"
                value={formData.projectLinks}
                onChange={handleChange}
                placeholder="https://project1.com, https://project2.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          {/* Resume */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaFileAlt /> Upload Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {resumeName && (
              <p className="text-sm text-gray-600 mt-1">
                File selected: <span className="font-medium">{resumeName}</span>
              </p>
            )}
          </div>

          {/* Submit + Reset */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto disabled:bg-blue-400"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold w-full md:w-auto"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;