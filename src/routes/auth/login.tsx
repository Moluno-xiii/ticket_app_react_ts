import { createFileRoute, Link } from "@tanstack/react-router";
import type { FormEvent } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Button from "../../components/UI/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };
    if (!emailRegex.test(data.email)) {
      toast.error("Invalid email");
      return;
    }
    login(data.email, data.password);
  };
  return (
    <form
      className="flex w-full text-white justify-center items-center flex-col gap-y-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl md:text-3xl">Login</h2>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md  focus:border-dark focus:outline-none"
          name="password"
          required
          minLength={8}
        />
      </div>
      <Button title="Login" type="submit" />
      <p className="">
        Don't have an account?{" "}
        <Link
          className="hover:underline italic  hover:text-primary"
          to="/auth/signup"
        >
          Signup
        </Link>
      </p>
    </form>
  );
}
