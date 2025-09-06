"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "@/lib/zodSchema";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonLoading from "@/components/application/ButtonLoading";
import { z } from "zod";
import Link from "next/link";
import { WEBSITE_LOGIN } from "@/routes/AdminPanelRoute";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);

  const formSchema = zSchema
    .pick({
      password: true,
      email: true,
      name: true,
    })
    .extend({
      confirmPassword: z
        .string()
        .refine((data) => data.password === data.confirmPassword, {
          message: "Passwords and confirm password must be the same",
          path: ["confirmPassword"],
        }),
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div>
      <Card className="w-[400px]">
        <CardContent>
          <div className="flex justify-center ">
            <Image
              className="max-w-[150px]"
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create New Account</h1>
            <p>Create new account to continue</p>{" "}
          </div>

          <div className="mt-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleRegisterSubmit)}>
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="John Doe"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@gmail.com"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="Password"
                            placeholder="password@123"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-5">
                  <FormField
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type={isTypePassword ? "password" : "text"}
                            placeholder="password@123"
                            {...field}
                          />
                        </FormControl>
                        <button
                          className="absolute top-1/2 right-2 cursor-pointer"
                          type="button"
                          onClick={() => setIsTypePassword(!isTypePassword)}
                        >
                          {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <ButtonLoading
                    loading={loading}
                    className="w-full cursor-pointer"
                    type="submit"
                    text="Login"
                  />
                </div>
                <div className="text-center">
                  <div className="flex justify-center items-center gap-1">
                    <p>Already have account !</p>
                    <Link
                      href={WEBSITE_LOGIN}
                      className="text-primary underline"
                    >
                      Create Account
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="" className="text-primary underline">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default page;
