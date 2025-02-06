"use client";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { DotedSeperator } from "@/components/doted-seperator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "Password is required"),
});

export const SignInCard = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 h-screen ">
      <div className="relative text-black">
        <Image
          src="/fitness4.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full h-screen p-4"
        />

        <Button
          onClick={() => router.push("/")}
          className="absolute top-8 left-8 text-white rounded-full px-6 flex items-center gap-2 justify-center transition-all duration-500 ease-in-out border border-gray-700 bg-gradient-to-b from-gray-800 to-gray-950 shadow-[0_4px_10px_rgba(0,0,0,0.7)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.9)] hover:scale-105 active:scale-95 active:shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          style={{
            boxShadow:
              "inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 6px 10px rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          Athlevo
        </Button>
      </div>

      <div className="flex items-center justify-center bg-bl">
        <Card className="w-full h-full md:w-[487px] border-none shadow-none flex flex-col justify-center ">
          <CardHeader className="flex   text-left p-7">
            <CardTitle className="text-4xl ">Welcome back!</CardTitle>
          </CardHeader>
          <div className="px-7 ">
            <DotedSeperator />
          </div>

          <CardContent className="p-7">
            <Form {...form}>
              {" "}
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={false} size={"lg"} className="w-full">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
          <div className="px-7 ">
            <DotedSeperator />
          </div>
          <CardContent className="p-7 flex flex-col gap-y-4">
            <Button
              variant={"secondary"}
              size={"lg"}
              className="w-full"
              disabled={false}
            >
              <FcGoogle className="mr-2 size-5" />
              Login with Google
            </Button>
          </CardContent>
          <div className="px-7">
            <DotedSeperator />
          </div>

          <CardContent className="p-7 flex items-center justify-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link href={"/sign-up"}>
                <span className="text-blue-700"> &nbsp;Sign Up</span>
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
