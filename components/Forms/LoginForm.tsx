import React, { useEffect } from "react";
import CustomInput from "@/components/Inputs/Input";
import { CircularProgress } from "@nextui-org/react";
import CustomButton from "@/components/Buttons/Button";
import useLogin from "@/hooks/useLogin";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const { isLoading, token } = useAppSelector((state) => state.user);
  const { data, handleChange, handleLogin } = useLogin();

  useEffect(() => {
    handleNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleNavigate = () => {
    if (token) {
      router.push("/home");
    }
  };
  return (
    <div className="flex flex-col w-full h-full items-center mt-[180px]">
      <CustomInput
        type={"email"}
        name={"email"}
        value={data.email}
        onChange={handleChange}
        label={"Email"}
      />
      <CustomInput
        type={"password"}
        name={"password"}
        value={data.password}
        onChange={handleChange}
        label={"Password"}
      />
      {isLoading ? (
        <CircularProgress color="primary" aria-label="Login..." />
      ) : (
        <CustomButton text={"Login"} onClick={handleLogin} />
      )}
      <span className="text-background text-sm font-bold mt-12">
        {`Don't you have an account yet?. `}
        <Link href={"/register"} className="cursor-pointer italic">
          Register here
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
