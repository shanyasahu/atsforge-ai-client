import axios from "axios";

// make a reuseable things into shortcut
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const response = await api.post("/api/v1/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function login({ email, password }) {
  try {
    const response = await api.post("/api/v1/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  try {
    const response = await api.post("/api/v1/auth/logout");

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getMe() {
  try {
    const response = await api.get("/api/v1/auth/get-me");
    return response.data;
  } catch (err) {
    if (err.response?.status === 401) {
      return null; // user not logged in
    }

    console.error(err);
  }
}

export async function googleLogin(credential) {
  try {
    const response = await api.post("/api/v1/auth/google", {
      credential,
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// export async function interviewReport({
//   resume,
//   selfDescription,
//   jobDescription,
// }) {
//   try {
//     const response = await api.post("/api/v1/auth/interview", {
//       credential,
//     });

//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }
