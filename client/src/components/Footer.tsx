import { Link } from "wouter";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo showText={false} />
              <h3 className="text-xl font-bold font-poppins mt-2">OmiFoods</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing authentic taste to your kitchen with our premium ready-to-cook food products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Contact</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">FAQs</a>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=momos">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Momos</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=spring-roll">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Spring Rolls</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=burger-patty">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Burger Patty</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=soya-chap">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Soya Chap</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">Sauces & Gravies</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">123 Food Street, Industrial Area, New Delhi, 110001</span>
              </li>
              <li className="flex">
                <i className="fas fa-phone-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">info@omifoods.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OmiFoods. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
