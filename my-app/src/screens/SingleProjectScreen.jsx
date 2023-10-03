import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";
// import { Alert } from "@material-tailwind/react";

const SingleProjectScreen = () => {
  const { projectId } = useParams();

  const [projectData, setProjectData] = useState(null);
  const [projectStatus, setProjectStatus] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("storedData")) || [];
    const project = storedData[projectId - 1];

    setProjectData(project);

    // Load the project status from local storage
    const projectStatusData = localStorage.getItem(
      `projectStatus-${projectId}`
    );
    if (projectStatusData) {
      setProjectStatus(projectStatusData);
    }
  }, [projectId]);

  return (
    <>
      <NavBar />
      <div className="flex justify-center pt-10 cursor-default">
        <div className="bg-gray-100 p-8">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Project Details
          </h1>
          <div>
            <p>
              <strong>Project Name:</strong>{" "}
              {projectData ? projectData.project_name : "Loading..."}
            </p>
            <p>
              <strong>Live Url:</strong>{" "}
              {projectData ? projectData.live_url : "Loading..."}
            </p>
            <p>
              <strong>Author Name:</strong>{" "}
              {projectData ? projectData.user : "Loading..."}
            </p>
            {projectStatus && (
              <h1 className="text-xl font-bold mt-4">
                Project Status: {projectStatus}
              </h1>
            )}
            {projectStatus === "completed" && (
              <p className="text-green-500 font-bold">Project Completed</p>
            )}
            {projectData && projectData.userImage && (
              <img
                src={projectData.userImage}
                alt={`Sample for Project ${projectId}`}
                className="mx-auto my-4 rounded-lg"
                style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectScreen;
