import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";

export function SimpleRegistrationForm1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const history = useHistory(); // Get the history object
  const nav = useNavigate();
  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      // Check if the entered email and password match stored user data
      if (email === userData.email && password === userData.password) {
        setError("");
        nav("/");
        localStorage.setItem("userLoggedIn", true);
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("User not found");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center pt-44">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to log in.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleLogin}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <Typography color="red" className="mt-2 text-center">
                {error}
              </Typography>
            )}

            <Button className="mt-6" fullWidth type="submit">
              Sign In
            </Button>
            <Typography color="gray" className="mt-10 text-center font-normal">
              New to git-O?{" "}
              <Link to="/register" className="font-medium text-gray-900">
                <strong>Sign up</strong>
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}
