import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import Animation2 from "../assert/Animation - 1695534156312.json";
import Lottie from "lottie-react";
import { Button } from "@material-tailwind/react";
import { PlusCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
// import { UserCircleIcon } from "@heroicons/react/solid";

const HomeScreen = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn") === "true"; // Parse as boolean

  return (
    <>
      <NavBar />
      <div className="bg-gray-800 text-white flex flex-col md:flex-row items-center justify-between p-4 md:p-10">
        <div className="w-full md:w-1/2 pl-4 md:pl-10">
          <h1 className="font-custom1 text-4xl md:text-8xl pt-4">
            Project <br /> Management
          </h1>
          <div>
            <h1 className="font-custom2 text-lg md:text-xl text-left pt-5 ">
              Are you tired of struggling to keep your projects organized and on
              track? <br /> Its easy with{" "}
              <strong className="font-custom1 text-2xl md:text-4xl text-black ">
                GIT-0
              </strong>
            </h1>
          </div>
          <div className="flex justify-center md:justify-start pt-5">
            {userLoggedIn ? (
              <Link to="/prj">
                <Button
                  size="lg"
                  className="font-custom rounded-full flex items-center text-sm pl-4 pr-4 hover:bg-blue-300"
                >
                  <PlusCircleIcon className="w-7 mr-2" /> Add projects
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button
                  size="lg"
                  className="font-custom rounded-full flex items-center text-sm pl-4 pr-4 hover:bg-blue-300"
                >
                  <UserCircleIcon className="w-7 mr-2" /> Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-5 md:mt-0">
          <Lottie
            animationData={Animation2}
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
