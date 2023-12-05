import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { logout } from "@/slices/userSlice";
import { useRouter } from "next/navigation";

const useSession = () => {
  const { token } = useAppSelector((store) => store.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const item = localStorage.getItem("token");
    if (item) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(logout());
    router.replace("/login");
  };

  return { token, isLoggedIn, handleLogout };
};

export default useSession;
