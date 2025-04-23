import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Divider } from "@mui/material";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Policy from "../Policy/Policy";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  // ✅ Function to generate menu links dynamically
  const renderLinks = (links) => (
    <ul className="!space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.to}
            className="!text-gray-300 hover:!text-white !transition !duration-300 !no-underline hover:!border-b-2 !border-orange-600"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  // ✅ Footer Links Data
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  const importantLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms-of-service" },
    { label: "Support", to: "/support" },
    { label: "FAQ", to: "/faq" },
  ];

  // ✅ Social Media Links
  const socialLinks = [
    { to: "https://facebook.com", icon: <FaFacebookF size={20} />, hoverClass: "hover:!bg-blue-600" },
    { to: "https://twitter.com", icon: <FaTwitter size={20} />, hoverClass: "hover:!bg-blue-400" },
    { to: "https://linkedin.com", icon: <FaLinkedinIn size={20} />, hoverClass: "hover:!bg-blue-700" },
    { to: "https://instagram.com", icon: <FaInstagram size={20} />, hoverClass: "hover:!bg-pink-500" },
  ];

  return (
    <footer className="!bg-gradient-to-r !from-gray-900 !via-gray-800 !to-gray-900 !text-white  !mt-1">
    <Policy/>
    <div className="!mx-auto w-[90%] !py-12">
        {/* ✅ Footer Grid */}
        <Box className="!grid !grid-cols-1 sm:!grid-cols-3 md:!grid-cols-4 !gap-8 !text-sm !text-center md:!text-left justify-center !mx-auto" data-aos="fade-up">
          {/* ✅ Quick Links Section */}
          <Box data-aos="fade-up">
            <Typography variant="h6" className="!font-bold !mb-4 !uppercase !tracking-wide">Quick Links</Typography>
            {renderLinks(quickLinks)}
          </Box>

          {/* ✅ Important Links Section */}
          <Box data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h6" className="!font-bold !mb-4 !uppercase !tracking-wide">Important Links</Typography>
            {renderLinks(importantLinks)}
          </Box>

          {/* ✅ Contact Information */}
          <Box data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h6" className="!font-bold !mb-4 !uppercase !tracking-wide">Contact Us</Typography>
            <Typography className="!text-gray-400 font-bold">
              Hanuman Nagar, At Post: Jalgaon, Taluka: Rahata, Postal Code: 413723
            </Typography>
            <Typography variant="body2" className="!mt-3 !text-gray-400 !font-medium">
              📞 <Link href="tel:+919850502194" className="hover:!text-white !transition !duration-300 !no-underline">+91 9850502194</Link>
            </Typography>
            <Typography variant="body2" className="!mt-1 !text-gray-400 !font-medium">
              ✉️ <Link href="mailto:karanchavan2194@gmail.com" className="hover:!text-white !transition !duration-300 !no-underline">karanchavan2194@gmail.com</Link>
            </Typography>
          </Box>

          {/* ✅ Social Media Links */}
          <Box data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h6" className="!font-bold !mb-4 !uppercase !tracking-wide">Follow Us</Typography>
            <Box className="!flex !justify-center md:!justify-start !space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" className={`!bg-gray-700 ${social.hoverClass} !p-3 !rounded-full !transition !duration-300 !text-white`}>
                  {social.icon}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ✅ Divider */}
        <Divider className="!bg-gray-500 !my-8" />

        {/* ✅ Copyright Section */}
        <Typography variant="body2" align="center" className="!text-gray-400 !font-semibold">
          © {new Date().getFullYear()} Karan Chavan. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
