import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./pages/Index.jsx";
import { RouterProvider } from "react-router-dom";
import { MenuProvider } from "./state/MenuContext.jsx";
import { BannerHeightProvider } from "./Context/BannerHeightContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <MenuProvider>
=======
    {/* <MenuProvider> */}
>>>>>>> origin/dev_biplap
      <BannerHeightProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </BannerHeightProvider>
<<<<<<< HEAD
    </MenuProvider>
=======
    {/* </MenuProvider> */}
>>>>>>> origin/dev_biplap
  </StrictMode>
);
