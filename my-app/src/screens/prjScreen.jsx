import { Alert } from "@material-tailwind/react";
import ProjectScreen from "../components/inputScreen";
import { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import { Link } from "react-router-dom";

const InputScreen = () => {
  const [validLen, setValidLen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showMeassage, setShowMeassage] = useState(false);
  const [showName, setShowName] = useState("");
  const [storedData, setStoredData] = useState([]);

  // Function to retrieve data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("storedData")) || [];
    setStoredData(storedData);
  }, []);

  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  const AlertHandler = (e) => {
    if (Object.keys(e).length > 0) {
      setValidLen(true);
      setShowSuccessAlert(true);

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
      setTimeout(() => {
        setShowMeassage(true);
      }, 3000);

      const updatedData = [...storedData, e];
      setStoredData(updatedData);

      localStorage.setItem("storedData", JSON.stringify(updatedData));
    }
    setShowName(e["project_name"]);
  };

  useEffect(() => {
    if (!validLen) {
      setShowSuccessAlert(false);
    }
  }, [validLen]);

  return (
    <>
      {!validLen && <NavBar />}
      {!validLen && <ProjectScreen Alert={AlertHandler} />}
      <div className="min-h-screen flex flex-col items-center justify-center">
        {validLen ? (
          <>
            {showSuccessAlert && (
              <Alert
                icon={<Icon />}
                className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] flex justify-center w-80 h-14"
              >
                Project Added Successfully
              </Alert>
            )}
            {showMeassage ? (
              <p className="pt-0 font-custom text-center">
                You can view all projects including {showName}
                <br /> <Link to="/prjscr">By clicking Me</Link>
              </p>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default InputScreen;
