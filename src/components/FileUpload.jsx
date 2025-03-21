import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFile } from "../features/file/fileSlice";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // You can replace this with API call logic to upload the file
      dispatch(addFile({ name: file.name, size: file.size }));
      setFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} className="mt-4">
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;
