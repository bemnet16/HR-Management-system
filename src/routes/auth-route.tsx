import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { gapi } from "gapi-script";

import SignInPage from "@/auth/forms/signIn_page";
import AuthLayout from "@/auth/auth_layout";
import SignUPPage from "@/auth/forms/singUp_page";

const AuthRoute = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "349617457171-mb8jpbooa19ttqfhahs548vubqves7b9.apps.googleusercontent.com",
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUPPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthRoute;
