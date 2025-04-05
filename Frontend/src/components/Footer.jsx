import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2176FF] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">HackHost</h2>
          <p className="mb-4">Empowering innovation, one hackathon at a time.</p>
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

        {/* Platform Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Platform</h2>
          <ul className="space-y-2">
            <li><a href="#">Organize a Hackathon</a></li>
            <li><a href="#">Browse Events</a></li>
            <li><a href="#">Join as a Participant</a></li>
            <li><a href="#">Sponsorships</a></li>
            <li><a href="#">Our Mission</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community Guidelines</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Hosting Policies</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>+92 304 1234567</li>
            <li>support@hackhost.com</li>
            <li>HackHub HQ,<br />Innovators Ave, Silicon District</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white/80 text-xs gap-2">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Code of Conduct</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <p>© {new Date().getFullYear()} HackHost. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
