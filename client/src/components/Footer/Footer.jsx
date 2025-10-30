import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              CONTACT INFO
            </h2>
            <p>3132 Kenwood Place</p>
            <p>Postal Code: 33301 Florida,United States</p>
            <p className="mt-2">📞 +18143133180</p>
           
            {/* Social Icons */}
            <div className="flex space-x-3 mt-4 text-white">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Know Us */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">KNOW US</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Brand Social Responsibilities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Shopping Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              SHOPPING INFORMATION
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  How To Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Service Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              SERVICE INFORMATION
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Return And Exchange
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping & Charges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">Copyright ©2025 Gizmo. All Rights Reserved</p>
          <p className="text-sm">
            System Design & Developed By:{" "}
            <span className="text-red-500">Farhad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
