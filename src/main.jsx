import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

// import Translate from "./Translate/Translate";

// import StarRating from "./StarRating";

// import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<ChakraProvider>*/}
    {/*   <StarRating*/}
    {/*     maxRating={5}*/}
    {/*     message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}*/}
    {/*   />*/}
    {/*   <StarRating color="red" size={24} maxRating={5} />*/}
    {/* </ChakraProvider>*/}

    <ChakraProvider>
      <App />
    </ChakraProvider>

    {/*<ChakraProvider>*/}
    {/*  <Translate />*/}
    {/*</ChakraProvider>*/}
  </React.StrictMode>
);
