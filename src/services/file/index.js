import connection from "@/api/axios";

const uploadFileToCloud = async (formData) => {
  const response = await connection.post("/files/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export { uploadFileToCloud };
