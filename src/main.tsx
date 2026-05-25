import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App.tsx";
import { DataProvider } from "./contexts/DataContext";

const rootElement = document.getElementById("root");

const mouseMovedEvent = (event: MouseEvent) => {
  const x = event.pageX;
  const y = event.pageY;
  if (rootElement) {
    rootElement.style.backgroundImage = `radial-gradient(500px at ${x}px ${y}px, 
    rgba(56, 61, 114, 0.70), transparent 70%)`;
    // More a component in rgba color => brighter spot
    // more transparency % => bigger visible radius of torch
  }
};

rootElement?.addEventListener("mousemove", mouseMovedEvent as EventListener);

createRoot(rootElement!).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
);
