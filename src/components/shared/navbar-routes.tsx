import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { BellRing } from "lucide-react";

const NavbarRoutes = () => {
  // const { pathname } = useLocation();

  return (
    <>
      <div className="flex justify-between w-full gap-x-2 ">
        <div className="min-w-[90px] flex items-center gap-x-2">
          <Link to="/notification">
            <Button size="sm" variant={"ghost"}>
              <BellRing className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/profile">
            {/* <Button size="sm" variant={"ghost"}> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s"
              className="rounded-full w-9 h-9 mr-3"
              alt=""
            />
            {/* </Button> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarRoutes;
