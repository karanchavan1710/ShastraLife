import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";
import FAQ_Form from "./FAQ_Form";

const faqs = [
  { question: "What is your return policy?", answer: "You can return any item within 30 days of purchase." },
  { question: "How can I track my order?", answer: "Once your order ships, you’ll receive a tracking link via email." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with varying shipping times." },
  { question: "Can I change my shipping address?", answer: "Yes, you can update your address before your order ships." },
];

const FAQ = () => {
  return (
    <Box className="md:!max-w-[80%] !mx-auto !p-6 !mt-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side - FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" className="!font-bold !mb-6 text-center md:text-left">
            Frequently Asked Questions
          </Typography>

          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Accordion className="!mb-4 !rounded-lg !shadow-md">
                <AccordionSummary expandIcon={<HiChevronDown />} className="!bg-gray-100">
                  <Typography className="!font-semibold">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="!text-gray-700">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Contact Form */}
        <FAQ_Form />
      </div>
    </Box>
  );
};

export default FAQ;
