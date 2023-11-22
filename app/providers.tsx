"use client";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import store from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
