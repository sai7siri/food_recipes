import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import CustomHook, { Store } from "./recipesUI/CustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomHook store={Store}>
      <App />
    </CustomHook>
  </StrictMode>
);
