import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signUp } from "@/services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Auth = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (signUpDetails.email && setSignUpDetails.password) {
      if (confirmPassword && setSignUpDetails.password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
        });
        return;
      }
      signUp(setConfirmPassword);
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Please fill in all fields",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">
          Welcome to File Storage
        </h1>

        {/* ShadCN Tabs */}
        <Tabs defaultValue="login">
          <TabsList className="flex justify-center mb-6 space-x-4">
            <TabsTrigger
              value="login"
              className="px-6 py-2 text-lg font-medium text-gray-700 bg-white border-b-2 border-transparent hover:border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-500"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="px-6 py-2 text-lg font-medium text-gray-700 bg-white border-b-2 border-transparent hover:border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-500"
            >
              Register
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <Input
              type="email"
              placeholder="Email"
              value={setSignInDetails.email}
              onChange={(e) =>
                setSignInDetails({ ...setSignInDetails, email: e.target.value })
              }
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={signInDetails.password}
              onChange={(e) =>
                setSignInDetails({ ...signInDetails, password: e.target.value })
              }
              className="mb-4"
            />
            <Button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white text-lg font-semibold rounded-full"
            >
              Login
            </Button>
          </TabsContent>

          {/* Register Form */}
          <TabsContent value="register">
            <Input
              type="text"
              placeholder="First Name"
              value={signUpDetails.firstName}
              onChange={(e) =>
                setSignUpDetails({
                  ...signUpDetails,
                  firstName: e.target.value,
                })
              }
              className="mb-4"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={signUpDetails.lastName}
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
              }
              className="mb-4"
            />
            <Input
              type="email"
              placeholder="Email"
              value={signUpDetails.email}
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, email: e.target.value })
              }
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={signUpDetails.password}
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, password: e.target.value })
              }
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-4"
            />
            <Button
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white text-lg font-semibold rounded-full"
            >
              Register
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
