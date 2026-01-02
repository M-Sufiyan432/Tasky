import { useEffect } from "react";
import api, { setAccessToken } from "../src/api/axios.js";
import { useDispatch } from "react-redux";
import { setAuthChecked, setUserData } from "../redux/userSlice.js";

import { useRef } from "react";

const useAuthBootstrap = () => {
  const dispatch = useDispatch();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const bootstrap = async () => {
      try {
        const refreshRes = await api.post("/api/auth/refresh");
        setAccessToken(refreshRes.data.accessToken);

        const meRes = await api.get("/api/auth/me");

        // 🔥 SAFE DISPATCH
        dispatch(setUserData(meRes.data.user ?? meRes.data));
      } catch {
        dispatch(setAuthChecked());
      }
    };

    bootstrap();
  }, [dispatch]);
};
export default useAuthBootstrap