import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Forms.css";
import Header from "../Header";
import Footer from "../Footer";
import FormikValidate from "./FormikValidate";


const Forms = () => {
  return (
    <div>
      <Header />
      <div className="formbacks ">
        <Grid container spacing={2}>
        <Grid item xs={4} className="kolor alng boxshadow"  container direction="row" justifyContent="center" alignItems="center" >
            <img src="/images/Shop Online.png" height={450} width={650} />
        </Grid>
        <Grid item xs={8}>
          <Box className="form-content" marginTop={8}>
            <Typography variant="h4" fontFamily="sans-serif" fontWeight="bold" color="#3D464D" >GET IN TOUCH WITH US</Typography>
           <FormikValidate/>
          </Box>
        </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Forms;
