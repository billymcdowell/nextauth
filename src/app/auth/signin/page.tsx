"use client";

import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

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
    <div className={""}>
      <div className="">
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => (pass.current = e.target.value)}
        />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
