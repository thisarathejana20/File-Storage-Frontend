import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ActivateAccount = () => {
  const [activationCode, setActivationCode] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const navigate = useNavigate();

  const handleActivate = () => {
    if (activationCode === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter the activation code.",
      });
    } else {
      // Simulate an API call for activation
      setTimeout(() => {
        if (activationCode === "123456") {
          // Assume the code '123456' is valid
          setIsActivated(true);
          Swal.fire({
            icon: "success",
            title: "Account Activated!",
            text: "Your account has been successfully activated.",
          });
          setTimeout(() => {
            navigate("/login"); // Redirect to login after successful activation
          }, 2000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Invalid Code",
            text: "The activation code you entered is incorrect.",
          });
        }
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">
          Activate Your Account
        </h1>

        {/* Activation Form */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Enter Activation Code"
            value={activationCode}
            onChange={(e) => setActivationCode(e.target.value)}
            className="mb-4"
          />
        </div>

        {/* Activation Button */}
        <Button
          onClick={handleActivate}
          className="w-full py-3 bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white text-lg font-semibold rounded-full"
        >
          Activate Account
        </Button>

        {/* Success Message */}
        {isActivated && (
          <div className="mt-4 text-center text-green-500">
            <p>Account successfully activated!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivateAccount;
