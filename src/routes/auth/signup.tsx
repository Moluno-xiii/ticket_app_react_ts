import { createFileRoute, Link } from "@tanstack/react-router";
import type { FormEvent } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Button from "../../components/UI/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const { signUp } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      email: string;
      password: string;
      confirmPassword: string;
    };
    if (!emailRegex.test(data.email)) {
      toast.error("Invalid email");
      return;
    }
    if (data.password !== data.confirmPassword) {
      toast.error("Both password fields do not match, try again!");
      return;
    }
    signUp(data.email, data.password);
  };
  return (
    <form
      className="flex w-full justify-center items-center flex-col gap-y-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl md:text-3xl">Sign up</h2>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="border border-dark bg-white text-dark rounded-md px-3 py-2 min-w-2xs md:min-w-md active:border-primary focus:outline-none"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="border border-dark bg-white text-dark rounded-md px-3 py-2 min-w-2xs md:min-w-md active:border-primary focus:outline-none"
          name="password"
          required
          minLength={8}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="border border-dark bg-white text-dark rounded-md px-3 py-2 min-w-2xs md:min-w-md active:border-primary focus:outline-none"
          name="confirmPassword"
          required
          minLength={8}
        />
      </div>
      <Button title="Sign up" type="submit" />
      <p className="">
        Already have an account?{" "}
        <Link
          className="hover:underline italic hover:text-primary"
          to="/auth/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
