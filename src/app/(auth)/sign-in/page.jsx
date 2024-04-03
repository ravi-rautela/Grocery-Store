"use client";

import GlobleApi from "@/app/_utils/GlobleApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import React, { useEffect, useState } from "react";
import { LoaderIcon } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loader, setLoader] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onsignIn = () => {
    setLoader(true);
    GlobleApi.SignIn(email, password).then(
      (res) => {
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        toast("Sign In Successfully!!");
        router.push("/");
        setLoader(false);
      },
      (e) => {
        toast(e?.response?.data?.error?.message);
        setLoader(false);
      }
    );
  };

  return (
    <div className="flex items-baseline justify-center my-20">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
        <h2 className="font-bold text-3xl">Sign In To Your Account</h2>
        <h2 className="text-gray-500">
          Enter your email and password to Sign in!
        </h2>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Passowrd"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => onsignIn()} disabled={!(email || password)}>
            {loader ? <LoaderIcon className="animate-spin"/> : "Sign In"}
          </Button>
          <p>
            Don't have an account{" "}
            <Link href="/create-account" className="text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
