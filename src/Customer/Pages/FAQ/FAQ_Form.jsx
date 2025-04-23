import React from "react";
import { Paper, Typography, TextField } from "@mui/material";
import { motion } from "framer-motion";
import OrangeButton from "../../Components/Common/Buttons/OrangeButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";

// ✅ Validation schema
const validationSchema = Yup.object({
  message: Yup.string()
    .required("Please enter your question.")
    .min(5, "Your question is too short."),
});

const FAQ_Form = () => {
  const initialValues = {
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // ✅ API call to send the form data
    
    axios.post('https://673f6889a9bc276ec4b87649.mockapi.io/todo', values)
    .then((response) =>{
      console.log(response.data);
    })
    console.log("Submitted Message:", values.message);
     toast.success("Question sent!")
    resetForm();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={4} className="md:!p-6 !rounded-lg !shadow-none">
        <Typography variant="h5" className="!font-bold !mb-4">
          Ask Any Question
        </Typography>

        <div className="!mx-auto flex justify-center">
          <img 
            src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg" 
            alt="faq-img" 
            className="!h-60 !object-cover" 
          />
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit} className="!space-y-1 mt-4">
              <TextField
                label="Ask Question"
                name="message"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                value={values.message}
                onChange={handleChange}
                className="!mb-4 !bg-gray-100"
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
              <OrangeButton variant="contained" fullWidth type="submit">
                Send Question
              </OrangeButton>
            </Form>
          )}
        </Formik>
      </Paper>
    </motion.div>
  );
};

export default FAQ_Form;
