import React, { useEffect } from "react";
import CustomInput from "@/components/Inputs/Input";
import { CircularProgress } from "@nextui-org/react";
import CustomButton from "@/components/Buttons/Button";
import useLogin from "@/hooks/useLogin";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";

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
    <div>
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
    </div>
  );
};

export default LoginForm;
