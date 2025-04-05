import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2176FF] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* BookMe Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">BookMe</h2>
          <p className="mb-4">Find Your Perfect Place to Stay</p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
              <div
                key={index}
                className="w-9 h-9 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#2176FF] transition"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Book your stay</a></li>
            <li><a href="#">Become a Host</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Option</a></li>
            <li><a href="#">Our COVID-19 Response</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>+923041234567</li>
            <li>muhiris@bookme.com</li>
            <li>Glassplace, Near<br />Cool Avenue, Boson</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white/80 text-xs gap-2">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and refund</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <p>Copyright 2024 BookMe, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  