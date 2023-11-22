import React, { useState, useEffect } from "react";

const useSession = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getToken();
  }, [token]);

  const getToken = () => {
    const item = localStorage.getItem("token");
    if (item) {
      setToken(item);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return { token, isLoggedIn };
};

export default useSession;
