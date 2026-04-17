import {
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
  } from "@mui/material";
  import { Field, Formik, Form } from "formik";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { submitContactForm } from "../../Redux/Slice/contactFormSlice";
  import * as Yup from "yup";
import OrangeButton from "../../Components/Common/Buttons/OrangeButton";
  
  // ✅ Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone number is required"),
    reason: Yup.string().required("Please select a reason"),
    message: Yup.string().required("Message is required"),
  });
  
  const ContactForm = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.contact);
  
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    };
  
    const handleSubmit = (values, { resetForm }) => {
      dispatch(submitContactForm(values));
      resetForm();
    };
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, touched, errors }) => (
          <Form className="md:!p-3 !my-6">
            <Typography variant="h5" className="!font-bold !text-gray-800 !mb-4">
              Get in Touch
            </Typography>
  
            <div className="!grid !grid-cols-2 !gap-4">
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </div>
  
            <div className="!mt-4">
              <TextField
                label="Email"
                name="email"
                fullWidth
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </div>
  
            <div className="!mt-4">
              <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                className="!bg--100"
                value={values.phone}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </div>
  
            <div className="!mt-4">
              <Typography className="!font-semibold !text-gray-700 !mb-2 !text-start">
                How can we help you?
              </Typography>
              <RadioGroup
                row
                name="reason"
                value={values.reason}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="support"
                  control={<Radio />}
                  label="Support"
                />
                <FormControlLabel
                  value="inquiry"
                  control={<Radio />}
                  label="Inquiry"
                />
                <FormControlLabel
                  value="feedback"
                  control={<Radio />}
                  label="Feedback"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {touched.reason && errors.reason && (
                <Typography className="!text-red-500 !text-sm">
                  {errors.reason}
                </Typography>
              )}
            </div>
  
            <div className="!mt-4">
              <TextField
                label="Message"
                name="message"  
                fullWidth
                multiline
                rows={4}
                value={values.message}
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
            </div>
  
            <div className="!mt-4">
            <OrangeButton
            type="submit"
            fullWidth
            disabled={status === "loading"}
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </OrangeButton>          
            </div>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default ContactForm;
  