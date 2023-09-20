"use client";

import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/server");
  }

  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/server",
    });
  };
  return (
    <div className="max-w-lg m-auto mt-24 flex flex-col gap-4">
      <h1 className="text-xl align-center">Login</h1>
      <Input
        type="text"
        placeholder="User Name"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => (pass.current = e.target.value)}
      />
      <Button onClick={onSubmit}>Login</Button>
    </div>
  );
};

export default LoginPage;
