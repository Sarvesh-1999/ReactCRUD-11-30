import { createRoot } from "react-dom/client";
import App from "./App";
import RouterApp from "./browserRouter/RouterApp";
import Context from "./browserRouter/context/Context";
createRoot(document.getElementById("root")).render(<App/>)