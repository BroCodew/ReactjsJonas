import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import { ChakraProvider } from "@chakra-ui/react";

// import "./index.css";
// import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ChakraProvider>
      <StarRating maxRating={5} />
      <StarRating maxRating={10} />
      <StarRating />
    </ChakraProvider>
  </React.StrictMode>
);
