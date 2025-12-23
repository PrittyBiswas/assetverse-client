import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/icons/VERSES_Logo.png"

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      {/* Top Section */}
      <div className="footer max-w-7xl mx-auto p-10 grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}

        <aside className="flex flex-col items-center text-center gap-1">
          <img className="size-12" src={logo} alt="AssetVerse logo" />
          <p className="font-bold text-primary text-xl">AssetVerse</p>
          <p className="text-sm">
            Corporate Asset Management System
          </p>
        </aside>


        {/* Services */}
        <nav>
          <h6 className="footer-title font-bold">Services</h6>
          <a className="link link-hover">Asset Tracking</a>
          <a className="link link-hover">Inventory Control</a>
          <a className="link link-hover">Maintenance</a>
          <a className="link link-hover">Reporting</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title font-bold ">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        {/* Social */}
        <nav className="flex flex-col items-center gap-3">
          <h6 className="footer-title font-bold ">Social</h6>

          <div className="flex gap-4 text-2xl">
            <a className="text-blue-600 hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a className="text-red-600 hover:scale-110 transition">
              <IoLogoYoutube />
            </a>
            <a className="text-sky-500 hover:scale-110 transition">
              <FaTwitter />
            </a>
          </div>
        </nav>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-base-500 py-5 text-center text-sm">
        © {new Date().getFullYear()} AssetVerse. All rights reserved.
      </div>
    </footer>
  );
}
