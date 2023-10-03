import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import { Badge } from "@material-tailwind/react";
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
// import { ExclamationIcon } from "@heroicons/react/solid";

const ProjectsListScreen = () => {
  const storedData = JSON.parse(localStorage.getItem("storedData")) || [];
  const allProjectData = storedData.map((project) => ({
    liveLink: project.live_url,
    authorName: project.project_name,
    repoName: project.github_url,
    gitName: project.user,
    projectStatus: project.projectStatus,
  }));

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 min-h-screen p-8 cursor-default">
        <h1 className="text-2xl font-bold mb-4 text-center font-custom">
          Projects List Screen
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProjectData.map((project, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-md p-4 ${
                project.projectStatus === "completed"
                  ? "bg-green-300"
                  : project.projectStatus === "onTrack"
                  ? "bg-amber-200"
                  : ""
              }`}
            >
              {project.projectStatus === "completed" && (
                <Badge
                  content={
                    <CheckIcon
                      className="h-4 w-4 text-white"
                      strokeWidth={2.5}
                    />
                  }
                  className="bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
                />
              )}

              {project.projectStatus === "onTrack" && (
                <Badge
                  color="red"
                  className="mt-1"
                  style={{
                    borderRadius: "100%",
                    width: "2rem",
                    height: "2rem",
                  }}
                  content={<ExclamationCircleIcon />}
                ></Badge>
              )}

              <Link
                to={`/project/${index + 1}`}
                className="text-lg  mb-2 block text-center"
              >
                Project {index + 1}
                <div className="text-left p-5 leading-9 ">
                  <p>
                    <strong className="font-extralight font-custom">
                      Live Link:
                    </strong>{" "}
                    {project.liveLink}
                  </p>
                  <p>
                    <strong className="font-extralight font-custom">
                      Author Name:
                    </strong>{" "}
                    {project.authorName}
                  </p>
                  <p>
                    <strong className="font-extralight font-custom">
                      Repository Name:
                    </strong>{" "}
                    {project.repoName}
                  </p>
                  <p>
                    <strong className="font-extralight font-custom">
                      Git Name:
                    </strong>{" "}
                    {project.gitName}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsListScreen;
