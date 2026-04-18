import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { googleLogin, getMe } from "../../services/auth.api";
import { useAuth } from "../../../hooks/useAuth";

const GoogleLoginButton = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const credential = credentialResponse.credential;
          // console.log("STEP 1 ✅ credential ok");

          const loginResult = await googleLogin(credential);
          // console.log("STEP 2 ✅ login result:", loginResult);

          const data = await getMe();
          // console.log("STEP 3 ✅ getMe result:", data);

          if (data?.user) setUser(data.user);
          navigate("/");
        } catch (err) {
          console.error("❌ EXACT ERROR:", err.message, err);
        }
      }}
      onError={() => console.error("❌ Google button error")}
    />
  );
};

export default GoogleLoginButton;
