import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";


import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="349617457171-mb8jpbooa19ttqfhahs548vubqves7b9.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  </BrowserRouter>
);
