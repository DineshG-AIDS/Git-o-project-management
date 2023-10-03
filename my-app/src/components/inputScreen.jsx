import {
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const ProjectScreen = (props) => {
  const [namePrj, setNamePrj] = useState("");
  const [linkPrj, setLinkPrj] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [userName, setUserName] = useState("");
  const [valid, setValid] = useState(true);
  const [projectStatus, setProjectStatus] = useState("completed");
  const [userImage, setUserImage] = useState(""); // New state to store user's image data

  useEffect(() => {
    const projectStatusValue = localStorage.getItem("projectStatus");
    if (projectStatusValue !== null) {
      setProjectStatus(projectStatusValue);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (namePrj.trim().length === 0 || linkPrj.trim().length === 0) {
      setValid(false);
      return;
    }

    const inputData = {
      project_name: namePrj,
      github_url: linkPrj,
      live_url: liveLink,
      user: userName,
      projectStatus: projectStatus,
      userImage: userImage, // Include user's image data
    };

    // Store the radio button value in localStorage
    localStorage.setItem("projectStatus", projectStatus);

    props.Alert(inputData);

    // Clear form fields and reset state
    setLinkPrj("");
    setNamePrj("");
    setValid(true);
    setUserImage(""); // Clear user's image data
  };

  const inputHandler = (i, val) => {
    if (i === "name") {
      setNamePrj(val);
    } else if (i === "link") {
      setLinkPrj(val);
    } else if (i === "live") {
      setLiveLink(val);
    } else if (i === "usr") {
      setUserName(val);
    }
    setValid(true);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // When the reader finishes loading the image
      setUserImage(reader.result); // Set user's image data to state
    };

    if (file) {
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };

  return (
    <>
      <div className="flex justify-center mt-2 pt-10 h-4">
        <form onSubmit={submitHandler}>
          <h1 className="mb-10 text-center text-2xl font-custom">
            Add your Project Here
          </h1>
          <div className="mb-4 w-96">
            <Input
              label="Author Name"
              className="w-full max-w-md rounded-md"
              value={namePrj}
              error={!valid}
              onChange={(e) => inputHandler("name", e.target.value)}
            />
          </div>

          <div className="mb-4 w-96">
            <Input
              label="Repo Name"
              className="w-full max-w-md rounded-md"
              value={linkPrj}
              error={!valid}
              onChange={(e) => inputHandler("link", e.target.value)}
              size="lg"
            />
          </div>
          <div className="mb-4 w-96">
            <Input
              label="Live URL / Or type NILL"
              className="w-full max-w-md rounded-md"
              value={liveLink}
              error={!valid}
              onChange={(e) => inputHandler("live", e.target.value)}
              size="lg"
            />
          </div>
          <div className="mb-4 w-96">
            <Input
              label="GitHub UserName"
              className="w-full max-w-md rounded-md"
              value={userName}
              error={!valid}
              onChange={(e) => inputHandler("usr", e.target.value)}
              size="lg"
            />
          </div>

          <div className="mb-4 w-96 font-custom2">
            <input
              type="file"
              accept="image/*"
              placeholder="Pick your Project Assert"
              onChange={handleImageUpload}
            />
          </div>

          <div className="flex justify-center flex-col">
            <Card className="w-full max-w-[28rem]">
              <List className="flex-row">
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-completed"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-completed"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        checked={projectStatus === "completed"}
                        onChange={() => setProjectStatus("completed")}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      Completed
                    </Typography>
                  </label>
                </ListItem>
                <ListItem className="p-0">
                  <label
                    htmlFor="horizontal-list-onTrack"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="horizontal-list"
                        id="horizontal-list-onTrack"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        checked={projectStatus === "onTrack"}
                        onChange={() => setProjectStatus("onTrack")}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      On track
                    </Typography>
                  </label>
                </ListItem>
              </List>
            </Card>
          </div>
          <div className="flex justify-center w-60 pl-10 ml-10">
            <Button className="mt-4 w-72 rounded-full" size="md" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectScreen;
