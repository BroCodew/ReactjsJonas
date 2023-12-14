import "./indexTest.css";
import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import Translate from "./Translate/Translate";
import { ChakraProvider } from "@chakra-ui/react";

// import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ChakraProvider>
      <StarRating
        maxRating={5}
        message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating color="red" size={24} />
    </ChakraProvider> */}

    <ChakraProvider>
      <Translate />
    </ChakraProvider>
  </React.StrictMode>
);
