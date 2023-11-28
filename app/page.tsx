"use client";
import { useEffect } from "react";
import useSession from "@/hooks/useSession";
import { useRouter } from "next/navigation";

const App = () => {
  const { isLoggedIn } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    } else {
      router.replace("/home");
    }
  }, [isLoggedIn, router]);
};

export default App;
