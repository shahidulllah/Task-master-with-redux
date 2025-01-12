import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/redux/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route.tsx";
import { ThemeProvider } from "./providers/ThemProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
