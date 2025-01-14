import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";  // Add .jsx extension
import './styles/index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);