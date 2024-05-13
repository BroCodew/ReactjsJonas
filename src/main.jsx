import "./index.css";
import "./output.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
// import FormAntd from "./FormAntd/index"
import TimePicker from "./TimePicker/index.tsx";
// import HomeWork from "./HomeWork/index.tsx";
// import AdvancedCss from "./AdvancedCss/index.tsx";
import Tailwind from "./Tailwind/index.tsx";

import FormAntd from "./FormAntd/index";

// import App from "./App.jsx";

// import StarRating from "./StarRating";

// import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<ChakraProvider>*/}
        {/*    <StarRating*/}
        {/*        maxRating={5}*/}
        {/*        message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}*/}
        {/*    />*/}
        {/*    <StarRating color="red" size={24} maxRating={5}/>*/}
        {/*</ChakraProvider>*/}
        {/* <ChakraProvider>
            <EvonDev/>
        </ChakraProvider> */}

        <ChakraProvider>
            <FormAntd/>
        </ChakraProvider>

        {/* <ChakraProvider>
      <App />
    </ChakraProvider> */}
        {/* <ChakraProvider>
            <TimePicker />
        </ChakraProvider> */}

        {/* <HomeWork /> */}
        {/* <AdvancedCss /> */}
        {/* <Tailwind /> */}
    </React.StrictMode>
);
