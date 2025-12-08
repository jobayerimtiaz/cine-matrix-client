import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">CineMatrix</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your ultimate destination for movies, trailers, and seamless ticket
            booking.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 mt-6">
            <Facebook size={20} className="hover:text-white transition" />
            <Instagram size={20} className="hover:text-white transition" />
            <Twitter size={20} className="hover:text-white transition" />
            <Youtube size={20} className="hover:text-white transition" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              Movies
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Upcoming
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Theaters
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Account
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <Mail size={18} />
            <span>support@cinematrix.com</span>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-400 mt-3">
            <Phone size={18} />
            <span>+880 1234-567890</span>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-400 mt-3">
            <MapPin size={18} />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CineMatrix — All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
