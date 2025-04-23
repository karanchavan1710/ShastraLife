import React from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Box className="!flex !justify-center !items-center !p-6 contact-bg min-h-screen">
      <Paper
        elevation={4}
        className="!w-full md:!w-3/4 md:!p-6 !gap-y-6 md:!gap-x-8 !bg-transparent !shadow-none !flex !flex-col md:!flex-row !justify-center"
      >
        {/* Contact Info */}
        <div className="!flex !flex-col !items-start !gap-4 !p-6 !bg-white h-fit !rounded-lg md:!w-1/3 shadow-md">
          <Typography variant="h5" className="!font-bold !text-gray-800">
            Contact Information
          </Typography>

          {/* Phone */}
          <div className="!flex !items-center !gap-2">
            <Tooltip title="Phone Number">
              <IconButton className="!text-blue-500">
                <MdPhone size={20} />
              </IconButton>
            </Tooltip>
            <Typography className="!text-gray-700">
              <a href="tel:1234567890" className="hover:underline">123-456-7890</a>
            </Typography>
          </div>

          {/* Email */}
          <div className="!flex !items-center !gap-2">
            <Tooltip title="Email Address">
              <IconButton className="!text-red-500">
                <MdEmail size={20} />
              </IconButton>
            </Tooltip>
            <Typography className="!text-gray-700">
              <a href="mailto:info@company.com" className="hover:underline">
                info@company.com
              </a>
            </Typography>
          </div>

          {/* Social Media */}
          <Typography variant="h6" className="!mt-4 !font-bold !text-gray-800">
            Follow Us:
          </Typography>
          <div className="!flex !gap-3">
            <Tooltip title="Facebook">
              <IconButton className="!text-blue-600 hover:scale-110 hover:!bg-orange-100 transition-all duration-300">
                <FaFacebook size={24} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton className="!text-blue-400 hover:scale-110 hover:!bg-orange-100 transition-all duration-300">
                <FaTwitter size={24} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton className="!text-pink-500 hover:scale-110 hover:!bg-orange-100 transition-all duration-300">
                <FaInstagram size={24} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton className="!text-blue-700 hover:scale-110 hover:!bg-orange-100 transition-all duration-300">
                <FaLinkedin size={24} />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        {/* Contact Form */}
        <Paper elevation={3} className="!w-full !bg-white !p-6 md:!w-2/3 !rounded-lg shadow-md">
          <ContactForm />
        </Paper>
      </Paper>
    </Box>
  );
};

export default ContactUs;
  