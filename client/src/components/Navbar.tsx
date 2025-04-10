import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <span className={`${isActive("/") ? "text-primary" : "text-foreground"} hover:text-primary transition font-medium cursor-pointer`}>
              Home
            </span>
          </Link>
          <Link href="/products">
            <span className={`${isActive("/products") ? "text-primary" : "text-foreground"} hover:text-primary transition font-medium cursor-pointer`}>
              Products
            </span>
          </Link>
          <Link href="/about">
            <span className={`${isActive("/about") ? "text-primary" : "text-foreground"} hover:text-primary transition font-medium cursor-pointer`}>
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className={`${isActive("/contact") ? "text-primary" : "text-foreground"} hover:text-primary transition font-medium cursor-pointer`}>
              Contact
            </span>
          </Link>
        </nav>

        {/* Spacer div for layout balance */}
        <div className="hidden md:block"></div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <Link href="/">
            <span 
              className={`block py-2 ${isActive("/") ? "text-primary" : "text-foreground"} hover:text-primary transition cursor-pointer`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </span>
          </Link>
          <Link href="/products">
            <span 
              className={`block py-2 ${isActive("/products") ? "text-primary" : "text-foreground"} hover:text-primary transition cursor-pointer`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </span>
          </Link>
          <Link href="/about">
            <span 
              className={`block py-2 ${isActive("/about") ? "text-primary" : "text-foreground"} hover:text-primary transition cursor-pointer`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span 
              className={`block py-2 ${isActive("/contact") ? "text-primary" : "text-foreground"} hover:text-primary transition cursor-pointer`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </span>
          </Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;
