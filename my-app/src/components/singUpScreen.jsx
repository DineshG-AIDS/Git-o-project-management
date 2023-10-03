import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import { useState } from "react";

function SimpleRegistrationForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [valid, setValid] = useState(true);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (email.trim().length === 0) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password.trim().length === 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!isChecked) {
      return;
    }

    const UserData = {
      username: userName,
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    setUserName("");
    localStorage.setItem("userData", JSON.stringify(UserData));
    nav("/login");
    console.log(UserData);
  };

  const InputHandler = (i, val) => {
    if (i === "name") {
      setUserName(val);
    } else if (i === "email") {
      setEmail(val);
    } else if (i === "password") {
      setPassword(val);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center pt-44">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-5 font-normal">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
            onSubmit={submitHandler}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                value={userName}
                error={nameError}
                onChange={(e) => InputHandler("name", e.target.value)}
              />
              <Input
                size="lg"
                label="Email"
                value={email}
                error={emailError}
                onChange={(e) => InputHandler("email", e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                value={password}
                error={passwordError}
                onChange={(e) => InputHandler("password", e.target.value)}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <Button className="mt-6" fullWidth type="submit">
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}

export default SimpleRegistrationForm;
