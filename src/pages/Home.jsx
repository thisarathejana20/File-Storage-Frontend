import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { logout } from "@/features/auth/authSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Swal from "sweetalert2";
import { uploadFile } from "@/features/file/fileSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { loading } = useSelector((state) => state.file);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      Swal.fire("Error", "Please select a file to upload!", "error");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    dispatch(uploadFile(formData)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        Swal.fire("Success", "File uploaded successfully!", "success");
        setShowUploadModal(false);
        setSelectedFile(null);
      } else {
        Swal.fire("Error", "File upload failed!", "error");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
        <h1 className="text-2xl font-semibold text-center mb-8">Dashboard</h1>

        <div className="space-y-4">
          <Link
            to="/documents"
            className="block text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            Documents
          </Link>
          <Link
            to="/images"
            className="block text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            Images
          </Link>
          <Link
            to="/videos"
            className="block text-lg hover:bg-gray-700 p-2 rounded-md"
          >
            Videos
          </Link>
          <button
            onClick={() => setShowUploadModal(true)}
            className="block text-lg bg-white text-blue-500 hover:bg-gray-200 p-2 rounded-md"
          >
            Upload File
          </button>
        </div>

        <Button
          onClick={handleLogout}
          className="mt-8 w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md"
        >
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome to your Dashboard
        </h2>

        {/* Tabs */}
        <Tabs defaultValue="owned">
          <TabsList className="flex space-x-4 border-b border-gray-300">
            <TabsTrigger
              value="owned"
              className="text-xl py-2 px-4 hover:bg-gray-200 rounded-md"
            >
              Owned Files
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="text-xl py-2 px-4 hover:bg-gray-200 rounded-md"
            >
              Shared Files
            </TabsTrigger>
          </TabsList>

          <TabsContent value="owned">
            <h3 className="text-2xl font-medium">Your Owned Files</h3>
            <p className="text-lg text-gray-700">Files you have uploaded.</p>
          </TabsContent>

          <TabsContent value="shared">
            <h3 className="text-2xl font-medium">Files Shared with You</h3>
            <p className="text-lg text-gray-700">
              Files shared with your account.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Upload a File</h2>
            <input
              type="file"
              onChange={handleFileChange}
              className="border p-2 w-full rounded"
            />
            <div className="mt-4 flex justify-end space-x-2">
              <Button
                onClick={() => setShowUploadModal(false)}
                className="bg-gray-400 hover:bg-gray-500"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpload}
                className="bg-blue-500 hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
