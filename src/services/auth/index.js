import connection from "@/api/axios";

const signUp = async ({ firstName, lastName, email, password }) => {
  const results = await connection.post("/auth/sign-up", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  return results.data;
};

const signIn = () => {
  return connection.post("/auth/sign-in");
};

export { signUp, signIn };
