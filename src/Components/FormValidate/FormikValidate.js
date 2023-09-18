import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid } from '@mui/material';
import "./Forms.css";

const FormikValidate = () => {
 
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    middleName: Yup.string(),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: '30px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className='error'>{formik.errors.firstName}</div>
          ) : null}
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="middleName"
            name="middleName"
            label="Middle Name"
            variant="outlined"
            fullWidth
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className='error'>{formik.errors.lastName}</div>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className='error'>{formik.errors.message}</div>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    
  );
};

export default FormikValidate;
