import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex">
          <div className="flex justify-center items-center ">
          <img
            src="/assets/logo-1.svg"
            alt="side img"
            className="hidden xl:block h-screen w-1/2 object-contain bg-no-repeat"
            />
            </div>
          <section className="flex flex-1 justify-center items-center flex-col py-2 h-screen">
            <div className="flex items-center justify-cente">
              <img src="/assets/logo.jpg" className="mr-4 w-23 h-23 object-contain" />
            </div>
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
