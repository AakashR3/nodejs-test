import "./App.css";
import Stack from "@mui/material/Stack";
import RSBar from "./Components/RSBar";
import Main from "./Components/Main";
import { Box, Container } from "@mui/material";
import Header from "./Components/Header";
import TopHeader from "./Components/HeaderAsset.js/TopHeader";
import BoxCard from "./Components/MainAssets.js/BoxCard";
import Footer from "./Components/Footer";


function App() {
  return (
   
    <Box sx={{backgroundColor:"#ededed"}}>
      <TopHeader/>
      <Header />
      <Container maxWidth="xl">
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Main />
          <RSBar />
        </Stack>
        <BoxCard/>
      </Container>
      <Footer/>
    </Box>
   
  );
}

export default App;
