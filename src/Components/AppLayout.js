import React from "react";
import TopHeader from "./HeaderAsset.js/TopHeader";
import { Box, Container, Stack } from "@mui/material";
import Header from "./Header";
import Main from "./Main";
import RSBar from "./RSBar";
import BoxCard from "./MainAssets.js/BoxCard";
import Footer from "./Footer";
import Error404 from "./Error404";


const AppLayout = () => {
  return (
    <>
       
      <Box sx={{ backgroundColor: "#ededed" }}>
        <TopHeader />
        <Header />
        <Container maxWidth="xl">
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Main />
            <RSBar />
          </Stack>
          <BoxCard />
        </Container>
        <Footer />
      </Box>
      
    </>
  );
};

export default AppLayout;
