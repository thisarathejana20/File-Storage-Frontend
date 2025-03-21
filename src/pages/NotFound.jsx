import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 py-2 px-6 rounded-full text-xl font-semibold transition-all"
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
