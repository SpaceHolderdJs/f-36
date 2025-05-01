import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CurrentUserContextProvider } from "./contexts/CurrentUserContext.tsx";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CurrentUserContextProvider>
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter>
    </CurrentUserContextProvider>
  </StrictMode>
);
