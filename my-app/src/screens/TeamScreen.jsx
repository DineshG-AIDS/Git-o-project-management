import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Lottie from "lottie-react";
import AnimationTEam from "../assert/Animation-team2.json";
import BackgroundBlogCard from "../components/BackgroundBlogCard";
import Img from "../assert/aranga1.jpg";
import Img1 from "../assert/dinesh.jpg";
import Img2 from "../assert/jeevan1.jpg";
import Img3 from "../assert/hari2.jpg";
import Img4 from "../assert/sas.jpg";

const TeamScreen = () => {
  return (
    <>
      <div className="bg-green-200 h-screen w-full flex flex-col overflow-hidden">
        <div className="bg-green-200 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="ml-8 pt-5">
              <Link
                to="/"
                className="text-4xl font-custom1 text-black hover:text-blue-400 mr-6"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="text-4xl font-custom1 text-black hover:text-blue-400 mr-6"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-4xl font-custom1 text-black hover:text-blue-400"
              >
                Register
              </Link>
            </div>
            <Button className="mr-4 bg-green-500 hover:bg-green-400 text-white text-sm rounded-2xl font-custom tracking-extra-wide">
              <a href="">Colbrate🍻</a>
            </Button>
          </div>
        </div>
        <div className="container mx-auto mt-10 pt-32 flex items-center">
          <div>
            <h1 className="font-custom5 text-6xl leading-loose">
              <strong> Casual people who will</strong> <br />
            </h1>
            <h1 className="font-custom6 text-6xl">achieve mad things</h1>
          </div>
          <div className="flex justify-end ml-44">
            <Lottie animationData={AnimationTEam} className="w-80" />
          </div>
        </div>
      </div>
      <div className="bg-green-200 flex gap-12 justify-start pb-10 p-10">
        <BackgroundBlogCard
          backgroundImage={Img1}
          title="FullStack Lead"
          author="Dinesh G"
          authorImage={Img1}
        />
        <BackgroundBlogCard
          backgroundImage={Img2}
          title="Machine Learning Lead"
          author="Jeevan"
          authorImage={Img2}
        />
        <BackgroundBlogCard
          backgroundImage={Img}
          title="Machine Learning Lead"
          author="Aranganathan"
          authorImage={Img}
        />
        <BackgroundBlogCard
          backgroundImage={Img3}
          title="Machine Learning Lead"
          author="Hari Haran"
          authorImage={Img3}
        />
        <BackgroundBlogCard
          backgroundImage={Img4}
          title="UI - UX"
          author="Saswath samraj"
          authorImage={Img4}
        />
      </div>
    </>
  );
};

export default TeamScreen;
