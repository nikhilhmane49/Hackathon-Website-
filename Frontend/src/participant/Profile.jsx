import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGithub, FaLinkedin, FaFileAlt, FaTrashAlt } from "react-icons/fa"; // Import icons from react-icons

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
    education: {
      college: "",
      degree: "",
      year: "",
      type: "",
    },
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id in formData.education) {
      // Handle changes for the education object
      setFormData({
        ...formData,
        education: { ...formData.education, [id]: value },
      });
    } else {
      // Handle changes for other fields
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
      <h1 className="text-4xl font-bold mb-6 text-[#3498db]">User Profile</h1>
      <p className="text-lg text-gray-600 mb-8">Complete your professional profile to stand out to employers.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
              <FaUser className="mr-2 text-[#3498db]" /> Name
            </label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-[#3498db]" /> Email
            </label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>
          
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
              <FaLock className="mr-2 text-[#3498db]" /> Password
            </label>
            <input 
              type="password" 
              id="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>
          
          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
              <FaPhone className="mr-2 text-[#3498db]" /> Contact Number
            </label>
            <input 
              type="tel" 
              id="contactNumber" 
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>
        </div>
        
        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
            <FaFileAlt className="mr-2 text-[#3498db]" /> Bio
          </label>
          <textarea 
            id="bio" 
            rows="4" 
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
          ></textarea>
        </div>
        
        {/* Education */}
        <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
          <label htmlFor="education" className="block text-lg font-medium text-gray-700 mb-4">Education</label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              id="college" 
              value={formData.education.college}
              onChange={handleChange}
              placeholder="University name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
            <input 
              type="text" 
              id="degree" 
              value={formData.education.degree}
              onChange={handleChange}
              placeholder="Degree"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
            <input 
              type="number" 
              id="year" 
              value={formData.education.year}
              onChange={handleChange}
              placeholder="Graduation Year"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
            <input 
              type="text" 
              id="type" 
              value={formData.education.type}
              onChange={handleChange}
              placeholder="Full-time, Part-time"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="githubLink" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
              <FaGithub className="mr-2 text-[#3498db]" /> GitHub
            </label>
            <input 
              type="url" 
              id="githubLink" 
              value={formData.githubLink}
              onChange={handleChange}
              placeholder="https://github.com/username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="linkedinLink" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
              <FaLinkedin className="mr-2 text-[#3498db]" /> LinkedIn
            </label>
            <input 
              type="url" 
              id="linkedinLink" 
              value={formData.linkedinLink}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
            />
          </div>
        </div>
        
        {/* Technical Skills */}
        <div>
          <label htmlFor="technicalSkills" className="block text-lg font-medium text-gray-700 mb-2">Technical Skills</label>
          <input 
            type="text" 
            id="technicalSkills" 
            value={formData.technicalSkills}
            onChange={handleChange}
            placeholder="JavaScript, React, Node.js, MongoDB"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
          />
          <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
        </div>
        
        {/* Project Links */}
        <div>
          <label htmlFor="projectLinks" className="block text-lg font-medium text-gray-700 mb-2">Project Links</label>
          <input 
            type="text" 
            id="projectLinks" 
            value={formData.projectLinks}
            onChange={handleChange}
            placeholder="https://project1.com, https://project2.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
          />
          <p className="text-sm text-gray-500 mt-1">Separate links with commas</p>
        </div>

        {/* Resume */}
        <div>
          <label htmlFor="resume" className="block text-lg font-medium text-gray-700 mb-2 flex items-center">
            <FaFileAlt className="mr-2 text-[#3498db]" />Upload Resume
          </label>
          <input 
            type="url" 
            id="resume" 
            value={formData.resume}
            onChange={handleChange}
            placeholder="https://drive.google.com/your-resume"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-colors duration-300"
          />
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="mt-8 w-full bg-[#3498db] text-white px-6 py-3 rounded-md hover:bg-[#2980b9] transition-colors duration-200 font-bold text-lg"
        >
          Create Profile
        </button>
        
        {/* Reset and Cancel */}
        <div className="flex items-center justify-between mt-4">
          <button 
            type="button" 
            className="text-[#3498db] hover:text-[#2980b9] font-medium"
            onClick={() => setFormData({
              name: "",
              email: "",
              password: "",
              bio: "",
              resume: "",
              githubLink: "",
              linkedinLink: "",
              technicalSkills: "",
              projectLinks: "",
              education: {
                college: "",
                degree: "",
                year: "",
                type: "",
              },
              contactNumber: ""
            })}
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
