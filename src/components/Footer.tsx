
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-medium mb-6">Minimal</h3>
            <p className="text-gray-600 mb-6">
              Beautiful design with attention to every detail.
            </p>
            <div className="flex space-x-4">
              <SocialIcon label="Twitter" />
              <SocialIcon label="Instagram" />
              <SocialIcon label="LinkedIn" />
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">Ultra Display</FooterLink>
              <FooterLink href="#">Smart Laptop</FooterLink>
              <FooterLink href="#">Innovation Phone</FooterLink>
              <FooterLink href="#">All Products</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 my-8 md:my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Minimal. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ label }: { label: string }) => {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
    >
      <span className="sr-only">{label}</span>
      <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
