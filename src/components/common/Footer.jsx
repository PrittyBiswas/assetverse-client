import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <aside>
        <p className="font-semibold text-primary text-lg">AssetVerse</p>
        <p>Corporate Asset Management System</p>
        <p className="text-sm">
          © {new Date().getFullYear()} AssetVerse. All rights reserved.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex gap-4 text-2xl">
          <a className="link link-hover text-blue-600">
            <FaFacebook />
          </a>
          <a className="link link-hover text-red-600">
            <IoLogoYoutube />
          </a>
          <a className="link link-hover text-sky-500">
            <FaTwitter />
          </a>
        </div>
      </nav>
    </footer>
  );
}
