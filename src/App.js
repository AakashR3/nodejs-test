import "./App.css";
import Forms from "./Components/FormValidate/Forms";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Error404 from "./Components/Error404";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/contact" element={<Forms />} />
        <Route path="/shop" element={<Error404 />} />
        <Route path="/page" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
