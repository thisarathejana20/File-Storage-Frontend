import FileUpload from "../components/FileUpload";
import { useSelector } from "react-redux";

const Home = () => {
  const { files } = useSelector((state) => state.file);

  return (
    <div className="p-8">
      <FileUpload />
      <div className="mt-6">
        <h2 className="text-xl font-semibold">My Files</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="mt-2">
              {file.name} ({file.size} bytes)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
